import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
import { SystemStore } from '@/store/system_store_interface/system_store';
const System = ():JSX.Element => {
  const [content, setContent] = useState("")
  const {systeminput, updatesystemInput} = SystemStore((state)=>({
    systeminput:state.systeminput,
    updatesystemInput:state.updatesystemInput
  }))
//   const addSystemInput = ()=>{
//     console.log(systeminput)
//   }
  return (
    <Box >
        <Typography variant="h6" component="h6" sx={{color:"black"}}>
            System
        </Typography>
        <TextField 
          onChange={(e)=>updatesystemInput(e.target.value)} 
          value ={systeminput} fullWidth rows={28} 
          multiline={true}
        />
    </Box>
  )
}

export default System

// e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>