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
      <div className="content-container">
        <div className="content">
          <div className="simple-login">
            <h3>Register Form</h3>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <span>
              Already Have an Account? <a href="#">Login Here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
