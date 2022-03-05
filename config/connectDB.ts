import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string)
  } catch (err) {
    console.log("Connection Error", err)
  }

  //   check if connection is already established or not.
  const connection = mongoose.connection
  //   if greater than 1. It's connected to database
  if (connection.readyState >= 1) {
    console.log("Already connected to Database")
    return
  }

  //   if connection is not estalished, "connection.readyState != 1", listen to event.
  //   listen to error event if any error occured.
  connection.on("error", () => {
    console.log("Failed to establish Connection. ")
  })
}

export default connectDB
