import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Wish from "./screens/Wish";
import "./App.css";
import Home from "./screens/Home";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-12 p-0">
            <Menu />
          </div>
          <div className="col-xs-12 container">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/wish">
                <Wish />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
