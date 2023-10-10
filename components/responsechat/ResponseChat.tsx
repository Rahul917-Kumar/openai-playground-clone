import { Box } from '@mui/material'
import React from 'react'
import { IchatFormat } from '@/store/chat_store_interface/chatFormatInterface'
import Markdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';

interface IResponse{
    response : IchatFormat[], 
    loading:boolean
}

const ResponseChat = (props:IResponse):JSX.Element => {
  return (
    <Box>
        {
            props.response.map((response, key)=>{
                return (
                    <>
                        <Box>
                            <Markdown 
                            components={{
                            p: ({ node, ...props }) => (
                                <p style={{ color: 'black', fontSize:"1rem" }} {...props} />
                                ),
                            }}
                            >{response.content}</Markdown>  
                            
                            {
                                (props.response.length-1==key)&&(props.loading)?(
                                    <>
                                        <Box sx={{ width: '100%' }}>
                                            <CircularProgress sx={{color:"#80cbc4"}} />
                                        </Box>
                                    </>
                                ):(
                                    <></>
                                )
                            }
                            <Divider/>
                        </Box>
                    </>
                )
            })
        }
    </Box>
  )
}

export default ResponseChat