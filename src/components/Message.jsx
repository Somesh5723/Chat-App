import React from 'react'
import Somesh2 from '../img/Somesh2.png';
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Somesh2} alt="" />
        <span>Just now</span>
      </div>

      <div className="messageContent">
        <p>hello Somuu..!!!</p>
        <img src={Somesh2} alt="" />
      </div>
    
    </div>
  )
}

export default Message
