import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Arak from './components/Arak';
import Belepes from './components/Belepes';
import Hirek from './components/Hirek';
import Infok from './components/Infok';
import Rolunk from './components/Rolunk';
import Szolgaltatasok from './components/Szolgaltatasok';
import Vendeglatas from './components/Vendeglatas';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path="/">
          <Redirect to="/hirek" />
        </Route>
        <Route path="/arak" component={Arak} />
        <Route path="/belepes" component={Belepes} />
        <Route path="/hirek" component={Hirek} />
        <Route path="/infok" component={Infok} />
        <Route path="/rolunk" component={Rolunk} />
        <Route path="/szolgaltatasok" component={Szolgaltatasok} />
        <Route path="/vendeglatas" component={Vendeglatas} />
      </div>
    </Router>
  );
}

export default App;
