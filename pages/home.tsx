import React, { useState } from 'react'
import Chat from '@/components/chat/UserChat'
import System from '@/components/system/System'
import GptReponseChat from '@/components/GptReponseChat';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const home = ():JSX.Element => {

 
  

  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box sx ={{backgroundColor:"white", width:"1000px", height:"90vh"}}>
            <System/>
            <GptReponseChat/>
        </Box>
    </Box>

  )
}

export default home


// <div>
//         , padding:"0px", margin:"0px"
//     </div>