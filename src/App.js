import React from 'react';
import Routes from './Routes'
import { Switch, BrowserRouter as Router} from 'react-router-dom'

import CarritoContextProvider from './context/carritoContext'
import CNavbar from './components/CNavbar';
import './App.css';
 

function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <CNavbar/>
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </CarritoContextProvider>
    </Router>
  );
}

export default App;