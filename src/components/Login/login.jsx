import React from "react";
import "./login.css";
import loginimg from "../../assets/loginimgs/signup.png";
const Login = () => {
  return (
    <>
      <div className="login_main">
        <img src={loginimg} alt="loginimage" />
        <form>
          <h2>Signin to your account</h2>

          <input type="email" placeholder="Enter E-mail" required />

          <input type="password" placeholder="Enter Password" required />

          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};
export default Login;
