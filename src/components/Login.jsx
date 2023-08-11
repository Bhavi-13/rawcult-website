import "../scss/Login.scss";


function Login() {
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
                  <input type="email" id="email" placeholder="Email Address" />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Password" />
                </div>
                <div className="forgot">
                  <a href="#">Forgot Password</a>
                </div>
                <button className="login-button">Login</button>
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
