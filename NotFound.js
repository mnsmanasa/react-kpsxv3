import React,{Component} from 'react'

export default class NotFound extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <h1>404!! Not Found</h1>
    )
  }
}