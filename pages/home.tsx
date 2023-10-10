import React, { useState } from 'react'
import Chat from '@/components/chat/UserChat'
import System from '@/components/system/System'
import GptReponseChat from '@/components/GptReponseChat';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



const home = ():JSX.Element => {


  

  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"3rem"}}>
        <Box sx ={{ width:"1100px", height:"90vh"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
          <Item>
            <System/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
             <GptReponseChat/>
          </Item>
        </Grid>
        </Grid>
        </Box>
    </Box>

  )
}

export default home


// <div>
//         , padding:"0px", margin:"0px"
//     </div>

/* 
<Box sx ={{backgroundColor:"blue  ", width:"1500px", height:"90vh"}}>
            <System/>
            <GptReponseChat/>
        </Box>

*/