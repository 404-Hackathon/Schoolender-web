import React from "react";
import Signup from "../Components/signUp/signup";
function SignupPage({ onSuccess }) {
  return (
    <div>
      <Signup onSuccess={onSuccess} />
    </div>
  );
}

export default SignupPage;
