import React,{Component} from 'react'

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <header className="container d-flex justify-content-between bg-grey">
        <div>Logo</div>
        {this.state.loggedIn && <div className="user-name">
        Manasa
        </div>}
      </header>
    )
  }
}