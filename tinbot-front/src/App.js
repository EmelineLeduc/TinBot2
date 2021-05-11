import React from "react";
import Home from "./components/Home/Home";

import Rencontre from "./components/Rencontre/Rencontre";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rencontre" component={Rencontre} />
      </Switch>
    </div>
  );
}

export default App;
