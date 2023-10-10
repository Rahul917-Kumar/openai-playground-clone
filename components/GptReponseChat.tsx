import React, { useState } from 'react'
import Userchat from './chat/UserChat'
import { Box, Button } from '@mui/material'
import ResponseChat from './responsechat/ResponseChat'
import {ChatResponseStore, ChatDetailStore} from "../store/chat_store_interface/chat_store"
import {SystemStore} from "../store/system_store_interface/system_store"
import { IchatFormat } from '@/store/chat_store_interface/chatFormatInterface'
const GptReponseChat = ():JSX.Element => {
    const {systeminput} = SystemStore((state)=>({
        systeminput:state.systeminput
    }))
    const {chats, deleteChats} = ChatDetailStore((state)=>({
        chats:state.chats,
        deleteChats:state.deleteChats
    }))
    const [responseChat, setResponseChat] = useState<IchatFormat[]>([])
    const sendChattoGPT = ()=>{
        // collecting previous response and current chats
        let previousResponse = [...responseChat, ...chats]
        

        // pass system only when api is calling
        let chatTosendAPI = [{
            role:"system",
            content:systeminput
        },...previousResponse]
        
        console.log(previousResponse)
        setResponseChat([...previousResponse, {
            role:"asistant",
            content:"just checking guys "
        }])
        // call api of GPT

        // as soon as i will get response i will add it to reponseChat and iterate it 
        
        responseChat.push({
            role:"asistant",
            content:"just checking guys "
        })


        // deleting previous chats
        let newArray:IchatFormat[] =[]
        deleteChats(newArray)
    }
  return (
    <Box>
        <ResponseChat response ={responseChat} />
        <Userchat />
        <Box>
            <Button variant="contained" onClick={ sendChattoGPT } >Submit</Button>
        </Box>
    </Box>
  )
}

export default GptReponseChat