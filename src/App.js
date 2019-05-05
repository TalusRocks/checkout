import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Cart from './Containers/Cart'
import Shipping from './Containers/Shipping'
import Confirmation from './Containers/Confirmation'

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

      <Route exact path='/shipping' component={ props => {
        return (
          <div>
            <NavBar/>
            <Shipping/>
          </div>
        )
      }}/>

      <Route exact path='/confirmation' component={ props => {
        return (
          <div>
            <NavBar/>
            <Confirmation/>
          </div>
        )
      }}/>

    </Router>
  );
}

export default App;
