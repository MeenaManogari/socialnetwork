import React, { useState, useEffect } from "react";
import "./signup.css";
import signimg from "../../assets/signupimgs/signup.png";
const Signup = () => {
  const initialValues = {
    fullname: "",
    surname: "",
    mail: "",
    pswd: "",
    cnfmpswd: "",
    DOB: "",
    gender: "",
    signupbtn: "",
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
    if (!values.fullname) {
      errors.fullname = "Name required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Name must have more than 3 characters";
    }
    if (!values.DOB) {
      errors.DOB = "birth date required";
    }
    if (!values.mail) {
      errors.mail = "enter email";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Invalid email format";
    }
    if (!values.pswd) {
      errors.pswd = "Enter Password";
    } else if (values.pswd.length < 8) {
      errors.pswd = "Need more than 8 characterss";
    }
    if (!values.cnfmpswd) {
      errors.cnfmpswd = "Re-enter password";
    } else if (values.cnfmpswd !== values.pswd) {
      errors.cnfmpswd = "password does not match";
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
              placeholder="FullName"
              name="fullname"
              value={formValues.fullname}
              onChange={handleChange}
              required
            />
            <p>{Errors.fullname}</p>

            <input type="text" placeholder="Surname" name="surname" required />
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            name="mail"
            value={formValues.mail}
            onChange={handleChange}
            required
          />
          <p>{Errors.mail}</p>
          <div className="new_password">
            <input
              type="password"
              placeholder="Enter password"
              name="pswd"
              value={formValues.pswd}
              onChange={handleChange}
              required
            />
            <p>{Errors.pswd}</p>

            <input
              type="password"
              placeholder="Re-enter password"
              name="cnfmpswd"
              value={formValues.cnfmpswd}
              onChange={handleChange}
              required
            />
            <p>{Errors.cnfmpswd}</p>
          </div>
          <input
            type="date"
            placeholder="Date of birth"
            name="DOB"
            required
            value={formValues.DOB}
            onChange={handleChange}
          />
          <p>{Errors.DOB}</p>

          <div className="gender_details">
            <h4>Gender</h4>
            <div className="gender">
              <input type="radio" name="gender" required />
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
            <input type="submit" value="Create Account" name="signupbtn" />
          </div>
        </form>
        {Object.keys(Errors).length === 0 && Submitting && (
          <span className="success-msg">Applied successfully</span>
        )}
      </div>
    </>
  );
};
export default Signup;
