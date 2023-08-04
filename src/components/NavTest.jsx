// This code is aim to perform the react-dom-route in Navbar 
// expectation: Can redirect me to diffreent pages like Blog/ Interest 


import {Link, Route, Routes, redirect } from 'react-router-dom'
import {Typography, Box}  from '@mui/material'

import TestBlogs from '../testing/TestBlogs';
import HomeTest from '../testing/HomeTest'


const testNav = () => {
  return (
  <>
    <Box   sx={{ alignItems:'center', 
      textAlign:'center',
      flexGrow:1,
      display:{ xs:'none' , md:'flex' }   }}>
      <Typography sx={{ textAlign:'center' }} > Hello TestNav </Typography>
      <Link to="/"> Home </Link>
      <Link to="/blogs"> Blog </Link>
    </Box>
    <Box   sx={{ alignItems:'center', 
      textAlign:'center',
      flexGrow:1,
      display:{ xs:'block' , md:'none' }   }}>
      <Typography sx={{ textAlign:'center' }} > Shrinked TestNav </Typography>
    </Box>
    <Routes>
        
      <Route path="/" element={<HomeTest/>} /> 
      <Route path="/blogs" element={<TestBlogs/>} /> 

    </Routes>
  </>
  )
}

export default testNav
