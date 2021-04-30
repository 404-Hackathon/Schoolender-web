import React from "react";

function Login(props) {
  return (
    <div className="Login">
      <div className="container">
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
