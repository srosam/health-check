import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./common/Header";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import VotingPage from "./VotingPage";

import NotFoundPage from "./NotFoundPage";

import signal2 from "../services/signal2";
import apiService from "../services/apiService";

function App() {
  const [userStateObject, setUserStateObject] = useState({
    id: null,
    name: ""
  });

  var s2 = new signal2(logMessage);
  var api = new apiService();

  function userLoginHandler(userName) {
    setUserStateObject({ id: 5000, name: userName });
    api.postUserLogin(userName);
  }

  function logMessage(message) {
    console.log(message);
  }

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />

      <Header loggedInUserName={userStateObject.name} />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/login"
          component={props => (
            <LoginPage
              {...props}
              userStateSetter={setUserStateObject}
              parentLoginHandler={userLoginHandler}
            />
          )}
        />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/vote"
          component={props => (
            <VotingPage {...props} userState={userStateObject} />
          )}
        />

        {/* redirect based on entered url */}
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
