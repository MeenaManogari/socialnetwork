import React, { useState, useEffect } from "react";
import "./signup.css";
import signimg from "../../assets/signupimgs/signup.png";
const Signup = () => {
  const initialValues = {
    firstname: "",
    surname: "",
    mail: "",
    pswd: "",
    cnfrmpswd: "",
    DOB: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!values.firstname) {
      errors.firstname = "Name required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "Name must have more than 3 characters";
    }

    if (!values.mail) {
      errors.mail = "mail required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Invalid email format";
    }
    if (!values.pswd) {
      errors.pswd = "Enter password";
    } else if (values.pswd.length < 8) {
      errors.pswd = "max 8 characters required";
    } else if (values.pswd.length > 12) {
      errors.pswd = "password doesnot exceed more than 12 characters";
    } else if (!pattern.test(values.pswd)) {
      errors.pswd =
        "contain at least one uppercase letter, one number, and one special character";
    }
    if (!values.cnfrmpswd) {
      errors.cnfrmpswd = "Re-enter password";
    } else if (values.cnfrmpswd != values.pswd) {
      errors.cnfrmpswd = "password doesnot match";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);

  return (
    <>
      <div className="signup_main">
        <img src={signimg} alt="signup" />

        <form onSubmit={handleSubmit} noValidate>
          <h2>Create new account</h2>
          <div className="names">
            <input
              type="text"
              name="firstname"
              placeholder="FirstName"
              required
              value={formValues.firstname}
              onChange={handleChange}
            />
            <p>{Errors.firstname}</p>

            <input type="text" name="surname" placeholder="Surname" required />
          </div>
          <input
            type="email"
            name="mail"
            placeholder="Enter your email address"
            required
            value={formValues.mail}
            onChange={handleChange}
          />
          <p>{Errors.mail}</p>
          <div className="new_password">
            <input
              type="password"
              name="pswd"
              placeholder="Enter password"
              required
              value={formValues.pswd}
              onChange={handleChange}
            />
            <p>{Errors.pswd}</p>
            <input
              type="password"
              name="cnfrmpswd"
              placeholder="Re-enter password"
              required
              value={formValues.cnfrmpswd}
              onChange={handleChange}
            />
            <p>{Errors.cnfrmpswd}</p>
          </div>

          <input type="date" name="DOB" placeholder="Date of birth" required />

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
            <p>{Errors.gender}</p>
          </div>
          <div className="sign_btn">
            <input type="submit" value="Create Account" />
          </div>
        </form>
        {Object.keys(Errors).length === 0 && Submitting && (
          <span className="success-msg">Registered successfully</span>
        )}
      </div>
    </>
  );
};
export default Signup;
