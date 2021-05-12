import React from "react";
import Form from "./components/Form";
import Home from "./components/Home/Home";
import ContactForm from "./components/Contact-page/ContactForm";
import RencontreDetails from "./components/Rencontre/RencontreDetails";
import Rencontre from "./components/Rencontre/Rencontre";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/contact" component={ContactForm} />
        <Route path="/rencontre" component={Rencontre} />
        <Route path="/:id" component={RencontreDetails} />
      </Switch>
    </div>
  );
}

export default App;
