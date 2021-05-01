import React from "react";
import firebase from "firebase";
import { NavLink } from "react-router-dom";
import "firebase/auth";
import "./login.css";
function Login({ onSuccess }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  const handleSubmit = async () => {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    onSuccess(user);

    return;
  };
  return (
    <>
      <div className="Signup">
        <div className="container">
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handleSubmit} className="login-btn">
            Login
          </div>
          <NavLink exact to="/">
            <h6>Don't have an account?</h6>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Login;
