import React, { useState } from "react";
//import SignalR from "../services/SignalR";

import TestService from "../services/testService";

const testService = new TestService();

function VotingPage(props) {
  var response = testService.getString("fooey");
  console.log(response);

  return (
    <>
      <h2>Hi {props.userState.name}</h2>
      <p>Please wait for Admin to enable voting</p>
      {/* <SignalR connectionHub="https://localhost:44389/voting" /> */}
    </>
  );
}

export default VotingPage;
