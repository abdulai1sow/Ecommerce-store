import { Component } from 'react'
import {signUp} from '../utilities/users-service'

export default class SignUpForm extends Component {
//class components
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value, error: ''})
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    //testing form
    // alert(JSON.stringify(this.state));
    try {
      //create thr formData to send to the backend
      const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      //pass the formData to the signup function
      const user = await signUp(formData)
      this.props.setUser(user)
      console.log(user);
    } catch {
      this.setState({error: 'sign up failed - try agian'})
    }
  }


  render() {
    //form validation 
    const disable = this.state.password !== this.state.confirm;

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>

            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required
            />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required
            />

            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required
            />

            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required
            />

            <button type="submit" disabled={disable}>SIGN UP</button>

          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>

      </div>
    );
  }
}