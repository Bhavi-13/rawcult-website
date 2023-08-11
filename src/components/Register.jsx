import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://rawcult-be.onrender.com/auth/register",
        {
          name: fullName,
          email,
          password,
        }
      );

      console.log("Registration successful!");
      // You can add further logic here, such as redirecting the user or showing a success message.
      alert(response.data.msg);
    } catch (error) {
      console.error("Registration error!");
      // Handle error, show error message, etc.
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginContent">
          <div className="stylish-login">
          <div className="logo">
            <img
              src={
                "https://shopo.quomodothemes.website/assets/images/logo-5.svg"
              }
              alt=""
            />
          </div>
            <h3>Register Your Account</h3>
              <form className="login-form">
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder='Full Name' value={fullName}
              onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Email Address" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="login-button" onClick={handleRegister}>Register</button>
              </form>
            <div className="register-link">
              Already Have an Account?<a href="#">Login Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
