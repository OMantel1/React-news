import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import News from "./components/News";
import Article from "./components/Article";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={News}></Route>
          <Route path="/news" exact component={Article}></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
