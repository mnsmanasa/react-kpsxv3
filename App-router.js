import React,{Component} from 'react';
import {NavLink, Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import User from './User'
import NotFound from './NotFound'

export default class AppRouter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render(){
    return (
      <Switch>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/user">User</NavLink>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route component={NotFound}/>
      </Switch>
    )
  }
}