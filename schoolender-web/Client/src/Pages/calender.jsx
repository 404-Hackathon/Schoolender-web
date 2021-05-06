import React from "react";
import Calender from "../Components/Calender/calender";
function CalenderPage({ user }) {
  return (
    <div>
      <Calender user={user} />
    </div>
  );
}

export default CalenderPage;
