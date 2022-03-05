import mongoose from "mongoose"

const FileDownloadSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const FileDownload = mongoose.model("FileDownload", FileDownloadSchema)

export default FileDownload
