import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const AuthPage = ({ setUser }) => {
  const [showSignUp, setShowSignUp] = useState(true)
  return (
    <div>
      {/* AuthPage */}
      {showSignUp ? <SignUpForm setUser={ setUser} /> : <LoginForm setUser={setUser} /> }

      <button onClick={() => setShowSignUp(!showSignUp)}>{ showSignUp ? 'Log in' : 'Sign Up'} </button>
      {/* <LoginForm />  */}
    </div>
  )
}

export default AuthPage