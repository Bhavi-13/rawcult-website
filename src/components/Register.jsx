import React from 'react'

function Register() {
  return (
    <div className="login">
    <div className="content-container">
      <div className="content">
        <div className="simple-login">
            <h3>Register Form</h3>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder='Full Name'/>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Email Address" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <span>Already Have an Account?<a href="#">Login Here</a></span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
