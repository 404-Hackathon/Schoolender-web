import React from "react";
import "./App.css";
import Signup from "./Pages/Signup";
import firebase from "firebase";
import LoginPage from "./Pages/Login";
import Calender from "./Pages/calender";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
function App() {
  let [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      {user ? (
        <div className="App">
          <Route exact path="/" render={(props) => <Calender user={user} />} />
          <Redirect to="/" />
        </div>
      ) : (
        <div className="App">
          <Route
            exact
            path="/signup"
            render={(props) => <Signup onSuccess={setUser} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <LoginPage onSuccess={setUser} />}
          />{" "}
          <Redirect to="/login" />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
