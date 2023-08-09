import "../scss/Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="content-container">
        <div className="content">
          <div className="simple-login">
            <h3>Login Form</h3>
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Email Address" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <span className="forgot"><a href="#">Forgot Password</a></span>
            <button>Login</button>
            <span>Don't Have an Account?<a href="#">Register Here</a></span>
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
