import mongoose, { Document } from "mongoose";

interface IFileUpload extends Document {
  fileName: string;
  price: number;
  isAdmin: boolean;
  sizeInBytes: string;
}

// only admin uploads files
const FileUploadSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
    },
    format: {
      type: String,
    },
    price: {
      type: Number,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    sizeInBytes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FileUpload = mongoose.model<IFileUpload>("FileUpload", FileUploadSchema);

export default FileUpload;
