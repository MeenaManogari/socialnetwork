import React from "react";
import "./mediafront.css";
import mediaimg from "../assets/frontlander/communicate.png";
const Frontlander = () => {
  return (
    <div className="lander_main">
      <div className="lander_img">
        <h1>Welcome!</h1>
        <p>Get Connected</p>
        <img src={mediaimg} alt="mediachat" height="300px" width="500px" />
      </div>
      <div className="lander_head">
        <h1>Social Network</h1>
        <p>A friendly connection with people allover the world!</p>
        <button>Login</button>
        <h4>OR</h4>
        <p>Don't have an account? Sign up now</p>
        <button>Signup</button>
      </div>
    </div>
  );
};
export default Frontlander;
