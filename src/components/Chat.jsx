import { AttachFile, InsertEmoticon, Mic, MoreVert, Search, Send, SmartButtonRounded } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import '../css/chat.css'

const Chat = () => {

  const [input,setInput] = useState('')
  
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar/>
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>last seen</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
          <IconButton>
            <Search/>
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className='chat_message'>
        <span className='chat_name'>Ritesh</span>
        This is a message
        <span className='chat_timestamp'>
          {new Date().toLocaleTimeString ()}
        </span>
        </p>
        <p className='chat_message chat_receiver'>
        <span className='chat_name'>Ritesh</span>
        This is a message
        <span className='chat_timestamp'>
          {new Date().toLocaleTimeString ()}
        </span>
        </p>
        </div>
        <div className="chat_footer">
          <InsertEmoticon/>
          <form>
            <input type="text" name="" id="" placeholder='Type a message'
              onChange={(e)=> setInput(e.target.value)}
              value = {input}
            />
            <button type='submit'></button>
          </form>
            <Mic/>
      </div>
    </div>
  )
}

export default Chat