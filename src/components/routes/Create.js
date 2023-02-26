import { Button } from '@mui/material';
import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'vulcan');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/duqws7uaz/image/upload',
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  }
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }
  const handleCancel = () => {
    setSelectedFile(null);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = await uploadImage(selectedFile)
    try {
      const response = await fetch("http://192.168.55.104:5000/api/v1/posts", {
        method: "POST",
        headers: {
          "Authorization": `${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ caption, image })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.msg);
      }


      // Success message
      toast.success("Post created successfully");
      navigate('/login', { replace: true })

    } catch (error) {
      // Error message
      toast.error(error.message);
    }
  }
  return (
    <div className="header-height create-card">
      <h6 className="create-post">create new post</h6>
      <div className='style-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="caption" placeholder='caption' value={caption} onChange={handleCaptionChange} />
          </div>
          <div>
            {!selectedFile && <Button style={{ position: "relative", right: "150px" }} size="small" variant="outlined" endIcon={<CameraAltIcon />} color="secondary" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" id="file" onChange={handleFileInput} />
            </Button>}
            {selectedFile && <div><p style={{ display: "inline-block" }}>Selected file: {selectedFile.name}</p>
              <button style={{ display: "inline-block" }} onClick={handleCancel}>X</button></div>}

          </div>
          <Button style={{ position: "relative", top: "50px" }} size="large" type='submit' variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  )
}

export default Create