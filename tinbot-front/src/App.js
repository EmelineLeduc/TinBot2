import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactForm from "./components/Contact/ContactForm";
import Home from "./components/Home/Home";
import Meet from "./components/Meet/Meet";
import MeetDetails from "./components/Meet/MeetDetails";
import SignIn from "./components/Home/SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={SignIn} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/rencontre" component={Meet} />
        <Route exact path="/:id" component={MeetDetails} />
      </Switch>
    </div>
  );
}

export default App;
