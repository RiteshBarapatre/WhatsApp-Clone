import React from 'react'
import '../css/sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar } from '@mui/material';
import { Search  } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebar_header">
    <Avatar src='https://avatars.githubusercontent.com/u/98260199?v=4'/>
        <div className="sidebar_header_right">
        <IconButton>
            <DonutLargeIcon/>
        </IconButton>
        <IconButton>
            <ChatIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
        </div>
    </div>
    <div className="sidebar_search">
      <div className="sidebar_searchContainer">
        <Search/>
        <input type="text" name="" id="" placeholder='Search or start new chat'/>
      </div>
    </div>
    <div className="sidebar_chats">

    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
    </div>
    </div>
  )
}

export default Sidebar