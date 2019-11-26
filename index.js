import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './Header';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
