import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
