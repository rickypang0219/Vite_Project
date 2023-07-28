import * as React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import TestBar from './components/TestBar'
import { Grid, Box, IconButton, CssBaseline, Switch } from '@mui/material'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useMediaQuery from '@mui/material/useMediaQuery';



// function App() {
//   return (
//     <Box sx={{ flexGrow: 1 }} >
//       {/* <Paper style={{ width: '100vw', height: '100vh' }} /> */}
//       <Grid container style={{ height: '100vh', width: '100vw' }} >
//         <Grid item xs={12}>
//           <TestBar />
//         </Grid>
//         <Home />
//       </Grid>
//     </Box>
//   );
// }

// export default App;



// export default function App() {
//   return (
//     <>
//       <h1> Hello World</h1>
//     </>
//   )
// }


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

// export default function ToggleColorMode() {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const [mode, setMode] = React.useState('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//           <Grid container style={{width: '100vw' }} >
//             <Grid item xs={12}>
//               <Navbar colorMode={colorMode} theme={theme} />
//             </Grid>
//             <Grid item>
//               <Home theme ={theme} />
//             </Grid>
//           </Grid>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }


export default function ToggleColorMode() {
  const [wrappedScreen, setWrappedScreen] = React.useState(null);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container style={{ width: '100vw' }} >
          <Grid item xs={12}>
            <Navbar colorMode={colorMode} theme={theme} />
          </Grid>
          <Box>
          <Home theme={theme} />
          </Box>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}