import React,{Component} from 'react'

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <h1>Home</h1>
    )
  }
}