import React, { useState } from "react";
import cancel from "../../../assets/addpostimg/close.svg";
import "./addpost.css";

const Addpost = (props) => {
  const [imgfile, uploadimg] = useState([]);
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <>
      <div className="post_popup">
        <div className="addpost_main">
          <form>
            <div className="preview_img">
              <h4>ImagePreview</h4>
              {imgfile.map((elem) => {
                return (
                  <>
                    <span key={elem}>
                      <img src={elem} height="200" width="200" alt="med1" />
                    </span>
                  </>
                );
              })}
              <input type="file" onChange={imgFilehandler} required />
            </div>
            <div className="post_details">
              <h2>Create a post</h2>

              <input type="text" placeholder="Title" required />

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Description goes here"
                required
              />

              <input type="submit" value="Add post to feed" />
            </div>
          </form>
        </div>
        <button onClick={() => props.setTrigger(false)}>
          <img src={cancel} alt="" />
        </button>
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
};
export default Addpost;
