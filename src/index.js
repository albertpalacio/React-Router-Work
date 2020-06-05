import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";

import Happy from "./components/Happy";
import Sleepy from "./components/Sleepy";
import Guilty from "./components/Guilty";

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Happy">
                  Happy
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Sleepy">
                  Sleepy
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Guilty">
                  Guilty
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/Happy" component={Happy} />
            <Route exact path="/Sleepy" component={Sleepy} />
            <Route exact path="/Guilty" component={Guilty} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
