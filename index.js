import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './Header';
import AppRouter from './App-router';
import SignUp from './SignUp';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="">
        <Header />
        { this.state.isLoggedIn && <AppRouter />}
        { !this.state.isLoggedIn && <SignUp />}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
