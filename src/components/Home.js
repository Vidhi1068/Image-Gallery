//making upload img file section  in this
import React from "react";
import "./Home.css";
import { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { upload } from "../store/fileSlice";

export default function Home() {
  //creat state for showing preview of img...set img on screen
  //1)We are creating a state name file using React-hook useState that will store the file. We are creating an input field that will take a file as the input.
  //2)We are creating an onChange function naming handleChange that stores URL string generated for the image we have uploaded through URL. createObjectURL()

  const [storeImg, setStoreImg] = useState();

  // const dispatch=useDispatch()

  //we make object to store Api of image file
  function handleChange(e) {
    console.log("files--->", e.target.files);
    setStoreImg(URL.createObjectURL(e.target.files[0])); //show us image name
  }

  // const handleUpload=(file)=>{
  //     dispatch(upload(file))
  // }

  function handleApi() {
    const FormData = new FormData();
    FormData.append("storeImg", storeImg);
    console.log("formdata", FormData);
    axios.post("url", FormData).then((res) => {
      console.log("result==>", res);
    });

    // dispatch(upload())
  }

  return (
    <div className="container home">
      <h2>Upload Your Image for Gallery</h2>
      <input type="file" onChange={handleChange} />
      <h5>Preview image</h5>
      <img src={storeImg} />
      <button onClick={handleApi}>UPLOAD</button>
    </div>
  );
}
