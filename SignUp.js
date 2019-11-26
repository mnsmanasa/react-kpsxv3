import React,{Component} from 'react'

export default class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: ''
    }
  }

  render(){
    return (
      <div className="signup-form d-flex justify-content-center">
        <div className="signup-container">
          <h3>Login</h3>
          <div class="signup-field">
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} placeholder="please enter username"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="username" value={this.state.username} placeholder="please enter username"/>
          </div>
        </div>
      </div>
    )
  }
}