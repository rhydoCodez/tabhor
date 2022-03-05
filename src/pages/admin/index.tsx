import axios from "axios"
import { useState } from "react"

const Admin = () => {
  const [file, setFile] = useState()
  const handleFileUpload = async () => {
    const res = await axios.post("http://localhost:3000/api/file/upload")
    const data = res.data
    console.log("uploaded file", data)
  }
  return (
    <div>
      {/* submit form data -- file */}
      <form
        action=""
        encType="multipart/form-data"
        onSubmit={() => handleFileUpload}
        method="POST"
      >
        {/* pick file to upload and show a preview... */}
        <div>
          <label htmlFor="uploadFile">Pick file to Upload</label>
          <input type="file" name="uploadFile" id="uploadFile" />
        </div>
        {/* submit file */}
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default Admin
