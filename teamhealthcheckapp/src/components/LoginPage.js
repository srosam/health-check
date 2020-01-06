import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";

const LoginPage = props => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    id: null,
    name: ""
  });

  function handleChange({ target }) {
    setUser({ ...user, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.name) _errors.name = "Name is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!formIsValid()) {
      toast.error("errors");
      return;
    }

    props.history.push("/vote");

    toast.success("Hello " + user.name);
  }

  return (
    <LoginForm
      user={user}
      onChange={handleChange}
      onLogin={handleLogin}
      errors={errors}
    />
  );
};

export default LoginPage;
