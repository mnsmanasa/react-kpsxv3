import React,{Component} from 'react'

export default class Header extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <header className="container d-flex justify-content-between bg-grey">
        <div>Logo</div>
        <div className="user-name">
        Manasa
        </div>
      </header>
    )
  }
}