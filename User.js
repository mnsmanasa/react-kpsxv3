import React,{Component} from 'react'

export default class User extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <h1>User</h1>
    )
  }
}