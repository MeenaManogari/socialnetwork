import React from "react";
import "./login.css";
import loginimg from "../../../assets/loginimgs/signup.png";
import loginclose from "../../../assets/addpostimg/close.svg";
const Login = (props) => {
  return props.trigger ? (
    <>
      <div className="close_login">
        <div className="login_main">
          <img src={loginimg} alt="loginimage" />
          <form>
            <h2>Signin to your account</h2>

            <input type="email" placeholder="Enter E-mail" required />

            <input type="password" placeholder="Enter Password" required />

            <input type="submit" value="Login" />
          </form>
        </div>
        <button onClick={() => props.setTrigger(false)}>
          <img src={loginclose} alt="" />
        </button>
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
};
export default Login;
