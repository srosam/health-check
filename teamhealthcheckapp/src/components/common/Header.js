import React from "react";
import { NavLink } from "react-router-dom";

import LoginButton from "./LoginButton";

function Header(props) {
  const activeStyle = { color: "orange" };

  function LoginSection() {
    if (!props.loggedInUserName) {
      return (
        <NavLink to="login" activeStyle={activeStyle}>
          Login
        </NavLink>
      );
    }

    return <>Welcome {props.loggedInUserName}</>;
  }

  return (
    <nav>
      <NavLink to="" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      {LoginSection()}
    </nav>
  );
}

export default Header;
