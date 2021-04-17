import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import ChampionRotation from './pages/ChampionRotation'
import Champion from './pages/Champion'
import MyStats from './pages/MyStats'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/rotations" exact render={ () => <ChampionRotation/>} />
          <Route path="/" exact render={ () => <Home/>}>
          </Route>
          <Route path="/champion/:id1" exact render={ () => <Champion/>}></Route>
          <Route path="/my-stats" exact render={ () => <MyStats/>}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
