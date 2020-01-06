import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <>
      <h2>Login</h2>
      <span>
        <TextInput
          id="name"
          label="Name"
          name="name"
          className="form-control"
          onChange={props.onChange}
          value={props.user.name || ""}
          error={props.errors.name}
        ></TextInput>
      </span>
      <Link className="btn btn-success" to="/vote" onClick={props.onLogin}>
        Login
      </Link>
    </>
  );
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default LoginForm;
