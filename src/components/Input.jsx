import React from 'react'
import attach from '../img/attach.png'
import image from '../img/image.png';
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type message...'/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
          <img src={image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
