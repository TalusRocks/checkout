import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Cart from './Containers/Cart'

function App() {
  return (
    <Router>

      <Route exact path='/' component={ props => {
        return (
          <div>
            <NavBar/>
            <Cart/>
          </div>
        )
      }}/>

    </Router>
  );
}

export default App;
