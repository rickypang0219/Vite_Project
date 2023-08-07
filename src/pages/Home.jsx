import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { indigo, grey, red } from "@mui/material/colors";
// import TimeConnector from '../components/TimelineConnector';

// Animation
import { useTransform, motion, useScroll } from "framer-motion";
import { Height } from "@mui/icons-material";

const Banner = () => {
  const careers = ["Researcher", "Programmer", "AI/Web Developer"];
  return (
    <>
      <Box
        sx={{
          height: "260px",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Typography sx={{ fontSize: 60 }}>
          <span style={{ fontWeight: "bold" }}>Ricky Pang</span>, <br />I am a{" "}
          <span
            style={{
              background: "linear-gradient(to right, #3f51b5, #2196f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
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
        <br />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography sx={{ fontSize: 60 }}>
          <span style={{ fontWeight: "bold" }}>Ricky Pang</span>, <br />I am a{" "}
          <span
            style={{
              background: "linear-gradient(to right, #3f51b5, #2196f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
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
      </Box>
    </>
  );
};

const Profile = ({ theme }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          // display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "25vw",
          position: "fixed",
        }}
      >
        <Avatar
          alt="Ricky Pang"
          src="self.png"
          sx={{ height: 170, width: 170 }}
        >
          {" "}
        </Avatar>
        <br />
        <Typography sx={{ fontSize: 40, fontWeight: "bold" }}>
          {" "}
          Ricky Pang{" "}
        </Typography>
        <br />

        <IconButton
          aria-label="location"
          href="https://www.google.com.hk/maps/@22.352734,114.1277,11z"
        >
          <LocationOnIcon sx={{ color: "red" }} />
          <Typography sx={{ fontSize: 20 }}> Hong Kong</Typography>
        </IconButton>
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="Github"
            href="https://github.com/rickypang0219"
          >
            {theme.palette.mode === "dark" ? (
              <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
            ) : (
              <GitHubIcon sx={{ color: "black", fontSize: 40 }} />
            )}
          </IconButton>
          <IconButton
            aria-label="linkedin"
            href="https://www.linkedin.com/in/ka-chun-pang-674269229/"
          >
            {theme.palette.mode === "dark" ? (
              <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
            ) : (
              <LinkedInIcon sx={{ color: "black", fontSize: 40 }} />
            )}
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            component="a"
            href="mailto:rickypang_aidev@outlook.com"
          >
            {theme.palette.mode === "dark" ? (
              <EmailIcon sx={{ color: "white", fontSize: 40 }} />
            ) : (
              <EmailIcon sx={{ color: "black", fontSize: 40 }} />
            )}
          </IconButton>
        </Stack>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <Stack direction="row" spacing={2} style={{ alignItems: "center" }}>
          <Avatar
            alt="Ricky Pang"
            src="/self.png"
            sx={{ height: 120, width: 120 }}
          >
            {" "}
          </Avatar>
          <Box direction="row" useflexgap="true" flexWrap="wrap">
            <Stack direction="column" spacing={2}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                {" "}
                Ricky Pang{" "}
              </Typography>
              <Box spacing={2}>
                <IconButton
                  aria-label="Github"
                  href="https://github.com/rickypang0219"
                >
                  {theme.palette.mode === "dark" ? (
                    <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
                  ) : (
                    <GitHubIcon sx={{ color: "black", fontSize: 40 }} />
                  )}
                </IconButton>
                <IconButton
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/ka-chun-pang-674269229/"
                >
                  {theme.palette.mode === "dark" ? (
                    <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
                  ) : (
                    <LinkedInIcon sx={{ color: "black", fontSize: 40 }} />
                  )}
                </IconButton>
                <IconButton
                  variant="contained"
                  color="primary"
                  component="a"
                  href="mailto:rickypang_aidev@outlook.com"
                >
                  {theme.palette.mode === "dark" ? (
                    <EmailIcon sx={{ color: "white", fontSize: 40 }} />
                  ) : (
                    <EmailIcon sx={{ color: "black", fontSize: 40 }} />
                  )}
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

const Employment = ({ theme }) => {
  const [isCenter, setIsCenter] = React.useState(false);
  // const connectorRef = React.useRef(null);
  const MotionBox = motion(Box);

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {

  //       if (entry.boundingClientRect.y >= window.innerHeight / 4) {
  //         setIsCenter(true);
  //       } else if (entry.boundingClientRect.y >= window.innerHeight)  {
  //         setIsCenter(false);
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0
  //     }
  //   );

  //   if (connectorRef.current) {
  //     observer.observe(connectorRef.current);
  //   }

  //   return () => {
  //     if (connectorRef.current) {
  //       observer.unobserve(connectorRef.current);
  //     }
  //   };
  // }, []);
  React.useEffect(() => {
    function handleScroll() {
      const centerOfScreen = window.innerHeight / 2;
      const connectorTop = connectorRef.current.getBoundingClientRect().top;
      const connectorBottom =
        connectorRef.current.getBoundingClientRect().bottom;
      const connectorCenter = (connectorTop + connectorBottom) / 2;

      if (connectorCenter <= centerOfScreen) {
        setIsCenter(true);
      } else if (connectorBottom >= centerOfScreen) {
        setIsCenter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const connectorRef = React.useRef(null);

  return (
    <Box
      p={5}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 50, fontWeight: "bold" }}>
        {" "}
        Employment{" "}
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ height: 10, width: 10 }} />
            <TimelineConnector
              ref={connectorRef}
              style={{
                backgroundColor: isCenter ? "#2196f3" : "#818181",
                width: 10,
                alignItems: "center",
                borderRadius: 10,
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span style={{ fontSize: 20 }}>Graduate Research Assistant</span>{" "}
              <br />
              <span style={{ color: grey[500] }}> SEPT. 2022 - MAY 2023 </span>
            </Typography>
            <br />
            <MotionBox
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? grey[900]
                    : "background.paper",
                boxShadow: 3,
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
              borderRadius={2}
              p={2}
            >
              <Paper />
              <Box
                sx={{
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(to right, #3f51b5, #2196f3)",
                  padding: "8px 15px",
                  borderRadius: 10,
                  textAlign: "center",
                  display: "inline-flex",
                  height: 7,
                }}
                p={1}
              >
                <Typography sx={{ fontSize: 12, alignSelf: "center" }}>
                  <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    FULL-TIME
                  </span>
                </Typography>
              </Box>
              <br />
              <br />
              <Grid container spacing={2} wrap="wrap" display="flex">
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{
                      align: "center",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    Research Assistant <br />
                    Department of Physics, HKUST
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Build classification model to investigat client loss with
                      Artifical Neural Network{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Levergaed LSTM RNN to forecast time series{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Collaborated in an international research group
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </MotionBox>
            <br />
            <br />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ height: 10, width: 10 }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span style={{ fontSize: 20 }}>Graduate Researcher </span> <br />
              <span style={{ color: grey[500] }}> SEPT. 2020 - AUG. 2022 </span>
            </Typography>
            <br />
            <MotionBox
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? grey[900]
                    : "background.paper",
                boxShadow: 3,
                width: "100%",
              }}
              borderRadius={2}
              p={2}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(to right, #3f51b5, #2196f3)",
                  padding: "8px 15px",
                  borderRadius: 10,
                  textAlign: "center",
                  display: "inline-flex",
                  height: 7,
                }}
              >
                <Typography sx={{ fontSize: 12, alignSelf: "center" }}>
                  <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    FULL-TIME
                  </span>
                </Typography>
              </Box>
              <br />
              <br />
              <Grid container spacing={2} wrap="wrap" display="flex">
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{
                      align: "center",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    Graduate Researcher <br />
                    Department of Physics, HKUST
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Build classification model to investigat client loss with
                      Artifical Neural Network{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Levergaed LSTM RNN to forecast time series{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Collaborated in an international research group
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </MotionBox>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

const Education = ({ theme }) => {
  const MotionBox = motion(Box);
  const [isCenter, setIsCenter] = React.useState(false);
  const connectorRef = React.useRef(null);

  React.useEffect(() => {
    function handleScroll() {
      const bottomOfWindow = window.scrollY;
      const centerOfScreen = window.innerHeight / 2;
      const connectorTop = connectorRef.current.getBoundingClientRect().top;
      const connectorBottom =
        connectorRef.current.getBoundingClientRect().bottom;
      const connectorCenter = (connectorTop + connectorBottom) / 2;

      if (connectorTop <= centerOfScreen) {
        setIsCenter(true);
      } else {
        setIsCenter(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box p={5}>
      <Typography sx={{ fontSize: 50, fontWeight: "bold" }}>
        {" "}
        Education{" "}
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ height: 10, width: 10 }} />
            <TimelineConnector
              ref={connectorRef}
              style={{
                width: 10,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: isCenter ? "#2196f3" : "#818181",
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <MotionBox
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? grey[900]
                    : "background.paper",
                boxShadow: 3,
                width: "100%",
                opacity: 1,
              }}
              borderRadius={2}
              p={2}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(to right, #3f51b5, #2196f3)",
                  padding: "8px 15px",
                  borderRadius: 10,
                  textAlign: "center",
                  display: "inline-flex",
                  height: 7,
                }}
                p={1}
              >
                <Typography sx={{ fontSize: 12, alignSelf: "center" }}>
                  <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    SEPT. 2020 - JUNE 2023
                  </span>
                </Typography>
              </Box>
              <br />
              <br />
              <Grid container spacing={2} wrap="wrap" display="flex">
                <Grid item xs={12} sm={6}>
                  <Typography style={{ align: "center" }}>
                    <span style={{ fontWeight: "bold", fontSize: 30 }}>
                      {" "}
                      Hong Kong University of Science and Technology
                    </span>{" "}
                    <br />
                    Master of Philosophy in Physics
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Build classification model to investigat client loss with
                      Artifical Neural Network{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Levergaed LSTM RNN to forecast time series{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Collaborated in an international research group
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </MotionBox>
            <br />
            <br />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ height: 15, width: 15 }} />
            <TimelineConnector
              ref={connectorRef}
              style={{
                width: 10,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: isCenter ? "#2196f3" : "#818181",
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <MotionBox
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? grey[900]
                    : "background.paper",
                boxShadow: 3,
                width: "100%",
              }}
              borderRadius={2}
              p={2}
            >
              <Paper />
              <Box
                sx={{
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(to right, #3f51b5, #2196f3)",
                  padding: "8px 15px",
                  borderRadius: 10,
                  textAlign: "center",
                  display: "inline-flex",
                  height: 7,
                }}
                p={1}
              >
                <Typography sx={{ fontSize: 12, alignSelf: "center" }}>
                  <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    SEPT. 2016 - AUG. 2020
                  </span>
                </Typography>
              </Box>
              <br />
              <br />
              <Grid container spacing={2} wrap="wrap" display="flex">
                <Grid item xs={12} sm={6}>
                  <Typography style={{ align: "center" }}>
                    <span style={{ fontWeight: "bold", fontSize: 30 }}>
                      {" "}
                      Hong Kong University of Science and Technology
                    </span>{" "}
                    <br />
                    Bachelor of Science, Physics (Upper-Second Class Honors)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography style={{ fontWeight: "bold" }}>
                    IT related fields
                  </Typography>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Scientific simulation using Python
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Data visualization using Seaborn and Matplolib{" "}
                    </Typography>
                  </Typography>
                  <Typography style={{ fontWeight: "bold" }}>
                    Quant related fields
                  </Typography>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Studied Advanced Partial Differential Euqations courses
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Solving Partial Differential Euqations with Python
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </MotionBox>
            <br />
            <br />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ height: 15, width: 15 }} />
            <TimelineConnector
              style={{
                width: 10,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: isCenter ? "#2196f3" : "#818181",
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <MotionBox
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? grey[900]
                    : "background.paper",
                boxShadow: 3,
                width: "100%",
              }}
              borderRadius={2}
              p={2}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  backgroundImage:
                    "linear-gradient(to right, #3f51b5, #2196f3)",
                  padding: "8px 15px",
                  borderRadius: 10,
                  textAlign: "center",
                  display: "inline-flex",
                  height: 7,
                }}
                p={1}
              >
                <Typography sx={{ fontSize: 12, alignSelf: "center" }}>
                  <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    JUNE 2020
                  </span>
                </Typography>
              </Box>
              <br />
              <br />
              <Grid container spacing={2} wrap="wrap" display="flex">
                <Grid item xs={12} sm={6}>
                  <Typography style={{ align: "center" }}>
                    <span style={{ fontWeight: "bold", fontSize: 30 }}>
                      {" "}
                      Conseil Européen pour la Recherche Nucléaire (CERN)
                    </span>{" "}
                    <br />
                    Summer Research Student
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="ul">
                    <Typography component="li">
                      {" "}
                      Selected out of over 4200 worldwide applicants{" "}
                    </Typography>
                    <Typography component="li">
                      {" "}
                      Participated in statistical inference in particle
                      simulation{" "}
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </MotionBox>
            <br />
            <br />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

const Intro = () => {
  return (
    <Box padding={2}>
      <Banner />
      <Typography sx={{ fontSize: 20 }} textAlign="justify">
        An aspiring physics M.Phil graduate of HKUST. Hands on experience on
        scientific simulation, Deep learning application, and data science
        projects. An Enthusiastic person who loves learning what I am curious.
        Insterested in absoring knowledges and sharing ideas to everyone.
      </Typography>
      <br />
      <i class="devicon-c-plain colored" style={{ fontSize: 70 }}></i>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        style={{ width: 70, height: 70 }}
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        style={{ width: 70, height: 70 }}
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        style={{ width: 70, height: 70 }}
      />
      <i class="devicon-html5-plain colored" style={{ fontSize: 70 }}></i>
      <i class="devicon-css3-plain colored" style={{ fontSize: 70 }}></i>
      <i class="devicon-react-original colored" style={{ fontSize: 70 }}></i>
      <i class="devicon-vim-plain colored" style={{ fontSize: 70 }}></i>
    </Box>
  );
};

const Home = ({ theme }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        {/* <Box sx={{ */}
        {/*   position: 'static', */}
        {/*   flexDirection: 'column',  // Column or Row? */}
        {/*   justifyContent: 'center', */}
        {/*   minHeight: '70vh' */}
        {/* }}> */}
        <Profile theme={theme} />
        {/* </Box> */}
      </Grid>

      <Grid item xs={12} md={9}>
        <Box p={5}>
          <Banner />
          <Typography sx={{ fontSize: 20 }} textAlign="justify">
            An aspiring physics M.Phil graduate of HKUST. Hands on experience on
            scientific simulation, Deep learning application, and data science
            projects. An Enthusiastic person who loves learning what I am
            curious. Insterested in absoring knowledges and sharing ideas to
            everyone.
          </Typography>
          <br />
          <i class="devicon-c-plain colored" style={{ fontSize: 70 }}></i>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            style={{ width: 70, height: 70 }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            style={{ width: 70, height: 70 }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            style={{ width: 70, height: 70 }}
          />
          <i class="devicon-html5-plain colored" style={{ fontSize: 70 }}></i>
          <i class="devicon-css3-plain colored" style={{ fontSize: 70 }}></i>
          <i
            class="devicon-react-original colored"
            style={{ fontSize: 70 }}
          ></i>
          <i class="devicon-vim-plain colored" style={{ fontSize: 70 }}></i>
        </Box>

        <Employment theme={theme} />
        <Education theme={theme} />
      </Grid>
    </Grid>
  );
};

export default Home;
