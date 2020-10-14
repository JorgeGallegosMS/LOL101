import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import Champion from './pages/Champion'
import ChampionRotation from './pages/ChampionRotation'



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/champions/:championName" component={Champion} />
        <Route exact path="/rotations" component={ChampionRotation} />
      </div>
    </Router>
  );
}

export default App;
