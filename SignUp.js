import React,{Component} from 'react'

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.setState(
      {firstTimeLoad: true}
    )
  }

  handleInputChange = (event) => {
    let key = event.target.name
    key === 'username'? this.setState({username: event.target.value, usernameError: true}):this.setState({password: event.target.value, passwordError: true})
  }

  validateForm = () => {
    if(this.state.username.length === 0 && this.state.password.length === 0){
      this.setState({usernameError: true,passwordError: true})
    }
  }
  render(){
    return (
      <div className="signup-form d-flex justify-content-center">
        <div className="signup-container">
          <h3>Login</h3>
          <div className="signup-field">
            <label>Username</label>
            <input type="text" name="username" required value={ this.state.username} onChange={this.handleInputChange}/>
            { this.state.usernameError && this.state.username.length === 0 && <div className="text-danger">Username is required</div>}
          </div>
          <div className="signup-field">
            <label>Password</label>
            <input type="password" required name="password" value={this.state.password} onChange={this.handleInputChange}/>
            { this.state.passwordError && this.state.password.length === 0 && <div className="text-danger">Password is required</div>}
          </div>
          <div className="signup-field d-flex justify-content-center">
            <button className="btn btn-outline-primary w-100" onClick={this.validateForm}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}