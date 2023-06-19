import React from "react";
import "./signup.css";
import signimg from "../../../assets/signupimgs/signup.png";
import cancel from "../../../assets/addpostimg/close.svg";
const Signup = (props) => {
  return props.trigger ? (
    <>
      <div className="signup_close">
        <div className="signup_main">
          <img src={signimg} alt="signup" />
          <form>
            <h2>Create new account</h2>
            <div className="names">
              <input type="text" placeholder="FirstName" required />

              <input type="text" placeholder="Surname" required />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <div className="new_password">
              <input type="password" placeholder="Enter password" required />

              <input type="password" placeholder="Re-enter password" required />
            </div>
            <input type="date" placeholder="Date of birth" required />

            <div className="gender_details">
              <h4>Gender</h4>
              <div className="gender">
                <input type="radio" name="gender" />
                <label>Female</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" />
                <label>Male</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" />
                <label>Custom</label>
              </div>
            </div>
            <div className="sign_btn">
              <input type="submit" value="Create Account" />
            </div>
          </form>
        </div>
        <button onClick={() => props.setTrigger(false)}>
          <img src={cancel} alt="" />
        </button>
      </div>
    </>
  ) : (
    ""
  );
};
export default Signup;
