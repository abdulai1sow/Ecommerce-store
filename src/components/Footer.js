import { BsSuitHeartFill } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <h1>SOW.</h1>

      <ul>
        <li>
          <a href="#"> HOME</a>
         </li>
        <li>
          <a href="#"> ABOUT</a>
          </li>
        <li>
          <a href="#">  FAQ</a>
        </li>
      </ul>

      <div className='pContainer'>
        <p style={{marginTop: '10px'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore perferendis atque possimus sequi suscipit ex facilis.</p>

      </div>

      <div>
        <p> <BsSuitHeartFill style={{color: 'red'}} /> from ATL</p>
      </div>

    </div>
  )
}

export default Footer