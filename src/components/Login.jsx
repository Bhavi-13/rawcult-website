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
            <h3>Login to Your Account</h3>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot">
                <a href="#">Forgot Password</a>
              </div>
              <button
                className="login-button"
                onClick={(e) => handleLogin(e.preventDefault())}
              >
                Login
              </button>
            </form>
            <div className="register-link">
              Don't Have an Account? <a href="#">Register Here</a>
            </div>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-login-button">
            <i className="bi bi-google"></i> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
