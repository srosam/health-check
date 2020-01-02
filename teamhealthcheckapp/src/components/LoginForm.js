import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <h2>Login</h2>
      <span>
        <label for="username">Name</label>
        <input id="username" type="text" className="form-control"></input>
      </span>
      <Link className="btn btn-success" to="/vote">
        Login
      </Link>
    </>
  );
}

export default LoginForm;
