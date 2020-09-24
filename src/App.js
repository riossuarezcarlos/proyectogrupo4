import React from 'react';
import Routes from './Routes'
import { Switch, BrowserRouter as Router} from 'react-router-dom'

import CNavbar from './components/CNavbar';
import './App.css';
 

function App() {
  return (
    <Router>
      <CNavbar/>
      <div className="container">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}

export default App;