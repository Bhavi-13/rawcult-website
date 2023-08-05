import "../scss/Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="content-container">
        <div className="content">
          <div className="simple-login">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Email Address" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <button>Login</button>
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
