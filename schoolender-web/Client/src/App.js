import React from "react";
import "./App.css";
import Signup from "./Pages/Signup";
import firebase from "firebase";
import LoginPage from "./Pages/Login";
import Calender from "./Pages/calender";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  let [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      {user ? (
        <div className="App">
          <Route
            exact
            path="/calender"
            render={(props) => <Calender user={user} />}
          />
        </div>
      ) : (
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => <Signup onSuccess={setUser} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <LoginPage onSuccess={setUser} />}
          />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
