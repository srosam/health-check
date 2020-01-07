import React from "react";
import { NavLink } from "react-router-dom";

function LoginButton(props) {
  return (
    <nav>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
}

export default LoginButton;
