import Typography from '@mui/material/Typography'

// export default function  Blog(){ 
//   return (
//     <>
//     <Typography sx={{ textJustify:'center', alignItems:'center' }} > Blogs </Typography>
//     </>
//   );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Profile = ({screenWidth}) => { 
  if (screenWidth >= 600 ) { 
  return (
    <Box sx={{bgcolor:'red', 
    height:'100vh',
    padding:5 }}>
      <Typography>Hello World </Typography>
    </Box>
  )} else { 
  return (<Box sx={{bgcolor:'orange',
    height:'40vh',
    padding:5}}>
      <Typography> Shrinked </Typography>
  </Box>
    )
  }
}




export default function FullWidthGrid() {
  const screenWidth = window.innerWidth;
  return (
  <Grid container >
      <Grid item md={12} xs={12}> 
        {/* <Typography sx={{textAlign:'center'}}> Appbar </Typography> */}
      </Grid>
      <Grid item md={3} xs={12} >
        {/* < Profile screenWidth={screenWidth} /> */}
        <Box sx={{bgcolor:'red', 
        height:'100vh',
        padding:5,
        display:{ md:'block', xs:"none"} }}>
          <Typography>Hello World </Typography>
        </Box>

        <Box sx={{bgcolor:'orange', 
        height:'40vh',
        padding:5,
        display:{ md:'none', xs:"block"} }} >
          <Typography>Hello World </Typography>
        </Box>
      </Grid>
  </Grid>
  );
}

