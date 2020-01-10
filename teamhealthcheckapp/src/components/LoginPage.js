import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";

const LoginPage = props => {
  const [errors, setErrors] = useState({});

  //keep to track and handle change of username
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
      toast.error("Unable to log you in");
      return;
    }

    props.history.push("/vote");
    props.userStateSetter({ name: user.name });
    toast.success("Hello " + user.name);

    props.parentLoginHandler(user.name);
  }

  return (
    <LoginForm
      user={user}
      onChange={handleChange}
      onLogin={handleLogin}
      //onLogin={props.handleLoggedIn}
      errors={errors}
    />
  );
};

export default LoginPage;
