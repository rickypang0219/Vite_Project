import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import { Grid, Box } from '@mui/material'


function App() {
  return (
    <Box sx={{ flexGrow: 1}} >
      <Grid container style={{ height: '100vh', width: '100vw' }} >
        <Grid item xs={12}>
          <Navbar />
        </Grid>
          <Home />
      </Grid>
    </Box>
  );
}

export default App;
