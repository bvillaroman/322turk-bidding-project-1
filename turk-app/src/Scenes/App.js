import React, { Component } from 'react';
import '../Styles/App.css';
import {Route,Router} from 'react-router-dom'
import history from '../Utils/history'
import NavBar from '../Components/Navigation/NavBar';
import Home from './Home';

import Login from './Login';
import PostList from './PostList';
import Demand from './Demand';
import Feed from './Feed/Feed'
import RegisterUser from './RegisterUser';
import MyAccount from './myAccount';
import RegisterDemand from './RegisterDemand';

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div >
          <NavBar/>
        <div>

          <Route exact path = "/" component = {Home}/>

          <Route  path = "/Login" component = {Login}/>
          <Route  path = "/RegisterUser" component = {RegisterUser}/>
          <Route  path = "/RegisterDemand" component = {RegisterDemand}/>
          <Route  path = "/user/api_token=:api_token" component = {MyAccount}/>
          <Route  path = "/demands/:id" component = {Demand}/>

        </div>

        </div>
      </Router>
    );
  }
}

export default App;
