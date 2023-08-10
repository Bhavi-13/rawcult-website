import React from 'react'

function Register() {
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
                  <input type="text" name="name" id="name" placeholder='Full Name'/>
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Email Address" />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Password" />
                </div>
                <button className="login-button">Register</button>
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

export default Register

