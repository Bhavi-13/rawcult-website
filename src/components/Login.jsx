import { useState } from "react";
import "../scss/Login.scss";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (req, res) => {
    try {
      const response = await axios.post(
        "https://rawcult-be.onrender.com/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      // console.log("Login Successful!");
      alert("User Logged In Sucessfully!");
    } catch (error) {
      console.error("Login Failed!", error);
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="login">
      <div className="content-container">
        <div className="content">
          <div className="simple-login">
            <h3>Login Form</h3>
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
            <span className="forgot">
              <a href="#">Forgot Password</a>
            </span>
            <button onClick={handleLogin}>Login</button>
            <span>
              Don't Have an Account?<a href="#">Register Here</a>
            </span>
          </div>
          <p>or</p>
          <button>
            <i className="bi bi-google"></i>Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
