const bcrypt = require("bcrypt")
const User = require('../../models/user')
const jwt = require('jsonwebtoken')


async function create(req, res) {
  try {
    //add the user to the database
    const user = await User.create(req.body)
    console.log(user);
    //create jwt token
    const token = createJWT(user)
    //send token to client
    res.json(token)
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
}

async function login(req, res) {
  try {
    //check if email match
    const user = await User.findOne({ email: req.body.email })
    //if user email does not match than send '..'
    if (!user) return res.send('Please check your email and password.')
    //checking if the password match
    const decodedPassword = await bcrypt.compare(req.body.password, user.password)
    //if password do not match than send '..'
    if (!decodedPassword) return res.send("Please check your email and password.")

    res.json(createJWT(user));
  } catch (err) {
    console.log(err);
  }
}

function createJWT(user) {
  return jwt.sign({user},process.env.SECRET,{expiresIn: '24h'})
}

module.exports = {
  create, login
}