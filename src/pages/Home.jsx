import { Grid, Box, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from '@mui/icons-material/LocationOn'






const Typewritter = () => {
  const careers = ['Physicist', 'Researcher', 'AI Developer', 'Data Scientist'];
  return (
    <Typography
      sx={{ fontSize: 60 }}
    >
      <span style={{ fontWeight: 'bold' }}>Ricky Pang</span>, <br />
      I am a {' '}
      <span style={{
        background: 'linear-gradient(to right, #3f51b5, #2196f3)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: 'bold'
      }}>
        <Typewriter
          words={careers}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </Typography>
  )
}




const Profile = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh'
    }}>
      <Avatar alt="Ricky Pang" src="" sx={{ height: 120, width: 120 }}> </Avatar>
      <br />
      <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}> Ricky Pang </Typography>
      <br />

      <IconButton aria-label="location" href='https://www.google.com.hk/maps/@22.352734,114.1277,11z'>
        <LocationOnIcon sx={{ color: 'red' }} />
        <Typography> Hong Kong</Typography>
      </IconButton>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="Github" href='https://github.com/rickypang0219'>
          <GitHubIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton aria-label="linkedin" href='https://www.linkedin.com/in/ka-chun-pang-674269229/'>
          <LinkedInIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton variant="contained" color="primary" component="a" href="mailto:kcpangac@connect.ust.hk">
          <EmailIcon sx={{ color: 'black' }} />
        </IconButton>
      </Stack>
    </Box>
  );
}




const Home = () => {
  return (
    <Grid container style={{ flexWrap: "wrap" }} >
      <Grid item xs={12} md={3}>
        < Profile />
      </Grid>

      <Grid item xs={12} md={9}>
        <Typewritter />
      </Grid>
    </Grid>
  );
}





export default Home;
