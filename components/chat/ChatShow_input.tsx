import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ChatDetailStore } from '@/store/chat_store_interface/chat_store'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

interface argu{
    id:number; 
    role:string;
    content:string;
    len:number
}

const ChatShow_input = (props:argu):JSX.Element => {
  const {updateChats, deletePaticularChat} = ChatDetailStore((state)=>({
    updateChats:state.updateChats,
    deletePaticularChat:state.deletePaticularChat
  }))

  const [input, setInput]  = useState(props.content)

  const updateChatEvent = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    // setInput(e.target.value)
    let obj = {
        id:props.id,
        role:props.role,
        content:e.target.value
    }
    updateChats(props.id, obj)
  }

  const updateRole = ()=>{
    let obj = {
        role:props.role,
        content:props.content
    }
    if(props.role==="user"){
        obj.role = "assistant"
    }else{
        obj.role = "user"
    }
    console.log()
    updateChats(props.id, obj)

  }


  return (
    <Box sx={{display:"flex", justifyContent:"space-between", margin:"1px"}}>
        <Box>
            <Button variant="outlined" onClick = { updateRole }> {props.role} </Button>
        </Box>
        <Box>
            <TextField 
                onChange={ (e)=> updateChatEvent(e) } 
                placeholder={`Enter an ${props.role} message here`} 
                value = {props.content}
                sx={{width:"500px"}}
            />
        </Box>
        
        <DoDisturbOnIcon sx={{cursor:"pointer" , color:"grey"}} onClick={()=>deletePaticularChat(props.id)} />
    </Box>
  )
}

export default ChatShow_input