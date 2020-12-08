import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import Header from "./components/Header";
import News from "./components/News";
import Article from "./components/Article";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={News}></Route>
          <Route path="/news/:param" component={Article}></Route>
        </Switch>
      </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
