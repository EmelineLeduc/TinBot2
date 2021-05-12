import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Rencontre from "./components/Rencontre/Rencontre";
import RencontreDetails from "./components/Rencontre/RencontreDetails";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rencontre" component={Rencontre} />
        <Route path="/:id" component={RencontreDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
