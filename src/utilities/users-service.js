//import all named exports attached to a usersAPI
import * as usersAPI from './users-api';


export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token)
  return getUser()
}

export async function login(userData) {
  const token = await usersAPI.login(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export function getToken() {
  //get token from local storage
  const token = localStorage.getItem('token')
  if (!token) return null
  
  //if we have a token
  const payload = JSON.parse(atob(token.split('.')[1]))
  console.log(payload);
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser() {
  const token = getToken()
  //if there is a user than return the user
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
  localStorage.removeItem('token')
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()  
  // checkToken returns a string, but let's
  // make it a Date object for more flexibility
  .then(dateStr => new Date(dateStr))
}