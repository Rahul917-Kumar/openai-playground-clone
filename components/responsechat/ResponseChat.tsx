import { Box } from '@mui/material'
import React from 'react'
import { IchatFormat } from '@/store/chat_store_interface/chatFormatInterface'
interface IResponse{
    response : IchatFormat[]
}

const ResponseChat = (props:IResponse):JSX.Element => {
  return (
    <Box>
        {
            props.response.map((response, key)=>{
                return (
                    <>
                        <div>
                            {
                                response.content
                            }       
                        </div>
                    </>
                )
            })
        }
    </Box>
  )
}

export default ResponseChat