import React,{Component} from 'react'

export default class Header extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <header className="d-flex justify-space-between">
        <div>Logo</div>
        <div>Nav</div>
      </header>
    )
  }
}