import React,{Component} from 'react'

export default class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({username: event.target.value})
  }
  render(){
    return (
      <div className="signup-form d-flex justify-content-center">
        <form className="signup-container">
          <h3>Login</h3>
          <div className="signup-field">
            <label>Username</label>
            <input type="text" name="username" required value={this.state.username} onChange={this.handleInputChange}/>
            <div className="text-danger">Username is required</div>
          </div>
          <div className="signup-field">
            <label>Password</label>
            <input type="password" required name="username" value={this.state.password}/>
            <div className="text-danger">Password is required</div>
          </div>
          <div className="signup-field d-flex justify-content-center">
            <button class="btn btn-outline-primary w-100">Login</button>
          </div>
        </form>
      </div>
    )
  }
}