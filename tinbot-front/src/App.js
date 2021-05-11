import React from 'react';
import ProfileApp from './components/profile-page/profil';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

<Switch>
  <Route exact path="/profil" component={ProfileApp} />
</Switch>
    </div>
  );
}

export default App;
