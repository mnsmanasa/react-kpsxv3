import React, { Component } from 'react';
import { render } from 'react-dom';
import {NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';
import Hello from './Hello';
import Header from './Header';
import AppRouter from './App-router';
import SignUp from './SignUp';
import './style.css';
import App from './components/App'

import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true
//     };
//     console.log(this.props.history)
//   }

//   render() {
//     return (
//       <div className="">
//         <Header />
//         { this.state.isLoggedIn ? <AppRouter /> :  <SignUp />}
//       </div>
//     );
//   }
// }

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
