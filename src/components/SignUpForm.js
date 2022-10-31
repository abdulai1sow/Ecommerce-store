import { Component } from 'react'

export default class SignUpForm extends Component {

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

  handleSubmit = (evt) => {
    evt.preventDefault()
    //testing form
    alert(JSON.stringify(this.state));
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