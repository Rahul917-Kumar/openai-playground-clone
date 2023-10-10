import React, { useState } from 'react'
import Userchat from './chat/UserChat'
import { Box, Button } from '@mui/material'
import ResponseChat from './responsechat/ResponseChat'
import {ChatResponseStore, ChatDetailStore} from "../store/chat_store_interface/chat_store"
import {SystemStore} from "../store/system_store_interface/system_store"
import { IchatFormat } from '@/store/chat_store_interface/chatFormatInterface'

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: `${process.env.NEXT_APP_OPENAI_API_KEY} ` ,
   dangerouslyAllowBrowser: true
});

const GptReponseChat = ():JSX.Element => {
    const {systeminput} = SystemStore((state)=>({
        systeminput:state.systeminput
    }))
    const {chats, deleteChats} = ChatDetailStore((state)=>({
        chats:state.chats,
        deleteChats:state.deleteChats
    }))
    const [responseChat, setResponseChat] = useState<IchatFormat[]>([])
    
    // loader
    const[loading, setLoading] = useState(false)

    // function to send previous and current chats to openai
    const sendChattoGPT = async()=>{

        // collecting previous response and current chats
        let previousResponse = [...responseChat, ...chats]
        setResponseChat( [...responseChat, ...chats])
        
        // call api of GPT

        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:
            `Bearer ${ process.env.NEXT_PUBLIC_OPENAI_API_KEY }  `,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [...previousResponse],
            temperature: 0.1,
            max_tokens: Math.floor(1000),
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.5,
            stop: ['"""'],
        }),
        }
        setLoading(true)
        fetch('https://api.openai.com/v1/chat/completions', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.choices[0].message.content)
                setResponseChat(
                     [...previousResponse, {
                        role:"assistant",
                        content:`${data.choices[0].message.content}`
                     }]
                )
                setLoading(false)

            })
            .catch((err) => {
                setLoading(false)
                console.log(err );
            });

        // as soon as i will get response i will add it to reponseChat and iterate it 
        

        // deleting previous chats
        let newArray:IchatFormat[] =[]
        deleteChats(newArray)
    }


    const updateResponseChatRole = (key:number)=>{
        let newArray = [...responseChat]
        let role = "user"
        if (newArray[key].role=="user"){
            role = "assistant"
        } 
        newArray[key].role = role
        setResponseChat([...responseChat])

    }

  return (
    <>
    <Box sx={{ height:"80vh", maxHeight:"80vh", overflowY: "scroll"}}>
        <ResponseChat response ={responseChat} loading = {loading} updateResponseChatRole={updateResponseChatRole} />
        <Userchat />
        
    </Box>
    <Box >
        <Button variant="contained" onClick={ sendChattoGPT } 
           sx={{backgroundColor:"gray", fontWeight:"bold", marginTop:"5px"}} 
        >
            Submit
            </Button>
    </Box>
    </>
  )
}

export default GptReponseChat