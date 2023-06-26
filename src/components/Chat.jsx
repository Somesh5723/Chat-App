import React, { useContext } from 'react'
import addMore from '../img/addMore.png';
import more from '../img/more.png';
import vc from '../img/video.png'
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';

const Chat = () => {

  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
