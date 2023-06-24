import React from 'react'
import addMore from '../img/addMore.png';
import more from '../img/more.png';
import vc from '../img/video.png'
import Messages from './Messages';
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Siddhant</span>
        <div className="chatIcons">
          <img src={vc} alt="" />
          <img src={addMore} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat
