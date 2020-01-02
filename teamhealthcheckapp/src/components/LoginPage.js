import React from "react";
import LoginForm from "./LoginForm";

//import { data } from "../api/data";

class LoginPage extends React.Component {
  //option 1
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userName: ""
  //   };
  // }

  //option 2
  state = {
    userName: ""
  };

  componentDidMount() {}

  // function onOkClick(){

  // }

  render() {
    return <LoginForm />;
  }
}

export default LoginPage;
