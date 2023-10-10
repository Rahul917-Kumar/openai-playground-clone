import { Box, Typography } from '@mui/material'
import React from 'react'
import { ChatDetailStore } from '@/store/chat_store_interface/chat_store'
import ChatShow_input from './ChatShow_input'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Chat = ():JSX.Element=> {
  const {chats, addChats} = ChatDetailStore((state)=>({
    chats:state.chats,
    addChats:state.addChats
  }))

  const addNewChat = ()=>{
    let role = "user"
    if(chats.length>0 && chats[chats.length-1].role=="user"){
      role = "assistant"
    }
    let obj={
      role:role,
      content:""
    }
    let newArray = [...chats]
    newArray.push(obj)
    console.log(newArray)
    addChats(newArray)
  }

  return (
    <Box>
        {
            chats.map((chat, key)=>{
                return (
                    <>
                       <ChatShow_input  id={key} role={chat.role} content={chat.content} len ={chats.length} /> 
                    </>
                )
            })
        }
        <Box sx={{cursor:"pointer", marginTop:"50px"}} onClick={ addNewChat} >
          <Typography component="p" sx={{display:"flex", justifyContent:":center", alignItems:"center"}}>
            <span>
              <AddCircleOutlineIcon/>
            </span>
            Add Message
         </Typography>
        </Box>
    </Box>
  )
}

export default Chat

/* 
chats:state.chats,
    addChats:state.addChats,
    updateChats:state.updateChats,
    deleteChats:state.deleteChats
*/