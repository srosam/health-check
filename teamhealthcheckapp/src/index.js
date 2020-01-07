import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import VotingPage from "./components/VotingPage";

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
