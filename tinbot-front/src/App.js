 
import React from 'react';
import ProfileApp from './components/profile-page/profil';
import Form from './components/Form';
import Home from './components/Home/Home';
import ContactForm from './components/Contact-page/ContactForm';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/profil" component={ProfileApp} />
  <Route exact path="/form" component={Form} />
  <Route exact path="/contact" component={ContactForm} />
</Switch>

    </div>
  );
}

export default App;
