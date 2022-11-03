
// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) {
  console.log(userData);
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userData)
  })

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Invalid Sign Up')
  }
}

export async function login(userData) {
  //base_url + '/login' is another way to call the logn route, since i have the base url already
  const res = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userData)
  })
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Invalid Sign In')
  }
}