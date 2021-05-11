import React from 'react';
import ProfileApp from './components/profile-page/profil';
import Form from './components/Form';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

<Switch>
  <Route exact path="/profil" component={ProfileApp} />
  <Route exact path="/form" component={Form} />
</Switch>
    </div>
  );
}

export default App;
