import React from "react";
import firebase from "firebase/app";
import { NavLink } from "react-router-dom";
import Calender from "../../Pages/calender";

import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "./signup.css";
const Signup = ({ onSuccess }) => {
  let [name, setName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  const handleSubmit = async (event) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      onSuccess(user);
    } catch (error) {
      console.log(error);
    }

    return;
  };
  return (
    <div className="Signup">
      <div className="container">
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={(e) => setName(e.target.value)}
        />
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
        <div onClick={handleSubmit()} className="login-btn">
          Signup
        </div>
        <NavLink exact to="/login">
          <h6>already have an account?</h6>
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
