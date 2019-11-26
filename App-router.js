import React,{Component} from 'react';
import {NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home'
import User from './User'
import NotFound from './NotFound'

export default class AppRouter extends Component {
  render(){
    return (
      <BrowserRouter>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/user">User</NavLink>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    )
  }
}