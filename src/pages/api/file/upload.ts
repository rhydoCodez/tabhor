import nc from "next-connect";
import multer from "multer";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import FileUpload from "../../../models/FileUpload";
import connectDB from "../../../config/connectDB";

// disable bodyParser.
export const config = {
  api: {
    bodyParser: false,
  },
};

interface IFile extends NextApiRequest {
  file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  };
}

const handler = nc();

// declare multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/files");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const { mimetype } = file;

    if (
      mimetype === "application/msword" ||
      mimetype === "application/pdf" ||
      mimetype === "text/plain" ||
      mimetype === "image/png" ||
      mimetype === "image/jpeg" ||
      mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

// get file actual size.
const getFileSize = (bytes: number, decimal: number) => {
  if (bytes === 0) {
    return "0 bytes";
  }

  const dm = decimal || 2;
  const sizes = ["bytes", "kb", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

const uploadFile = upload.single("file");
// const files = []
// upload.array('files')

handler.use(uploadFile);
handler.post(async (req: IFile, res: NextApiResponse) => {
  try {
    const { price } = req.body;
    await connectDB();
    // save file to DB.
    const file = new FileUpload({
      fileName: req.file.filename,
      secure_url: "http://till_later",
      format: req.file.mimetype,
      price: price,
      isAdmin: false,
      sizeInBytes: req.file.size,
    });
    await file.save();

    res.status(201).json({
      message: "File Uploaded successfully... ",
      fileSize: getFileSize(req.file.size, 2),
      file,
    });
  } catch (err) {
    res.status(400).json({ message: "Error occured!... ", err });
  }
});

export default handler;
