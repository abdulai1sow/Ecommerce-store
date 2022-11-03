import React from 'react'
import * as userService from '../utilities/users-service'


const OrderHistoryPage = () => {

  const handleCheckToken = async () => {
    try {
      userService.checkToken()
      const expDate = await  userService.checkToken()
console.log(expDate);
     } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1> OrderHistoryPage </h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  )
}

export default OrderHistoryPage