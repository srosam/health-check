import React, { useState } from "react";

function VotingPage(props) {
  return (
    <>
      <h2>Hi {props.userState.name}</h2>
      <p>Please wait for Admin to enable voting</p>
    </>
  );
}

export default VotingPage;
