import { Box } from '@mui/material'
import React from 'react'
import { IchatFormat } from '@/store/chat_store_interface/chatFormatInterface'
import Markdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "../../styles/global.css"

interface IResponse{
    response : IchatFormat[], 
    loading:boolean,
    updateResponseChatRole:(key:number)=>void
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const ResponseChat = (props:IResponse):JSX.Element => {

    

  return (
    <Box>
        {
            props.response.map((response, key)=>{
                return (
                    <>
                        <div
                        className='grid'
                        >
                            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}} className="grid-row">
                                <Button 
                                    variant="outlined" 
                                    onClick = {()=>props.updateResponseChatRole(key) }
                                    sx={{border:"none", "&:hover":{border:"none", backgroundColor:"#80cbc4"}, color:"black", fontWeight:"bold"}}
                                    >            
                                {response.role} 
                                </Button>
                            </div>
                            <div className='grid-second'>
                                <Markdown 
                                    components={{
                                    p: ({ node, ...props }) => (
                                        <p style={{ color: 'black', fontSize:"1rem" }} {...props} />
                                        ),
                                    }}
                                    >{response.content}
                                </Markdown> 
                            </div>   
                            
                            
                        </div>
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
                    </>
                )
            })
        }
    </Box>
  )
}

export default ResponseChat