import React, { useState } from "react";
import "./mediafront.css";
import Signup from "./Signup/signup";
import mediaimg from "../../assets/frontlander/communicate.png";
import Login from "./Login/login";
const Frontlander = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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
        <button onClick={() => setLoginOpen(true)}>Login</button>
        <h4>OR</h4>
        <p>Don't have an account? Sign up now</p>
        <button onClick={() => setSignupOpen(true)}>Signup</button>
      </div>
      <Login trigger={loginOpen} setTrigger={setLoginOpen} />
      <Signup trigger={signupOpen} setTrigger={setSignupOpen} />
    </div>
  );
};
export default Frontlander;
