import * as userService from '../utilities/users-service'
import { Home2nd, HomeItems } from './data'

const OrderHistoryPage = () => {

  const handleCheckToken = async () => {
    try {
      userService.checkToken()
      const expDate = await userService.checkToken()
      console.log(expDate);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}> Welcome to Exclusive </h1>

      <div className='hIntro'>
        {HomeItems.map((item) => (
          <div key={item.id} >
            <img src={item.image} alt="" className='hImg' />
          </div>
        ))}
      </div>
<h2 className='hH2' >Best Sellers</h2>
      <div className='slide2nd'>
        {Home2nd.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" className='img2nd' />
          </div>
        ))}
      </div>

    </div>
  )
}

export default OrderHistoryPage