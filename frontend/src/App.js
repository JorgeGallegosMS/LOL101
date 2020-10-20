import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import ChampionRotation from './pages/ChampionRotation'
import DisplayChampion from './components/DisplayChampion'
import Champion from './pages/Champion'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/rotations" exact render={ () => <ChampionRotation/>} />
          <Route path="/" exact render={ () => <Home/>}>
          </Route>
          <Route path="/champion/:id1" exact render={ () => <Champion/>}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
