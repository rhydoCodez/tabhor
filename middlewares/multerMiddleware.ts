import multer from "multer"
import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import { UploadApiResponse, v2 as cloudinary } from "cloudinary"
import FileUpload from "../models/FileUpload"
import connectDB from "../config/connectDB"

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// set the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/assets")
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-")
    cb(null, fileName + path.extname(file.originalname))
  },
})

//   will use the temporary storage
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // doc, docx, txt, pdf, odt
    if (
      file.mimetype == "application/msword" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype == "txt/plain" ||
      file.mimetype == "application/pdf" ||
      file.mimetype == "application/vnd.oasis.opendocument.text"
    ) {
    }
  },
})

// to fix property 'file' does not exist on type 'NextApiRequest'.
interface IMulterRequest extends NextApiRequest {
  file: any
}

// define multer as a middleware
const multerMiddleware = async (
  uploadFile: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => {
  // call next function ...
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // remember, your middleware could fail, always wrap in tryCatch block.
    try {
      connectDB()
      // the name of the 'field' of the file coming.
      upload.single("uploadFile")
      const file = (req as IMulterRequest).file
      // check if file is present or not
      if (!file) {
        console.log("Kindly choose a file.")
        return res
          .status(400)
          .json({ message: "Kindly choose a file to upload. " })
      }
      // upload file to cloudinary
      try {
        let uploadedFile: UploadApiResponse
        uploadedFile = await cloudinary.uploader.upload(file.path, {
          folder: "projects",
          resource_type: "auto",
        })

        // store file in db
        const { orignalname } = file
        // uploadedFile
        const { secure_url, bytes, format } = uploadedFile

        const newFile = await FileUpload.create({
          fileName: orignalname,
          sizeInBytes: bytes,
          secure_url,
          format,
          price: 20000,
          isAdmin: false,
        })
        await newFile.save()
        res
          .status(201)
          .json({ message: "everything worked till this place... " })
      } catch (err) {
        console.log(err)

        res.status(400).json({ message: "Error uploading to Cloudinary" })
      }

      // test middleware
      console.log("Middleware working... ")
      // should return a proper 'http handler'
      return uploadFile(req, res)
    } catch (err) {
      console.log("Error with middleware function", err)
    }
  }
}

export default multerMiddleware
