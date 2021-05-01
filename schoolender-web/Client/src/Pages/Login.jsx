import React from "react";
import Login from "../Components/Login/Login";
function loginPage({ onSuccess }) {
  return (
    <div>
      <Login onSuccess={onSuccess} />
    </div>
  );
}

export default loginPage;
