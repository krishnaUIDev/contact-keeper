import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
