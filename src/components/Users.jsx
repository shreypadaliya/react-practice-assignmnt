import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import user1 from "../data/Group.png";
import user2 from "../data/Group (1).png";
import user3 from "../data/Group (2).png";
import user4 from "../data/Group (3).png";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6D95FC',
    },
    background: {
      default: '#1a1a2e',
    },
  },
});

const StatItem = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(value);
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <Box ref={ref} textAlign="center" sx={{paddingTop:"83px",paddingBottom:"65px"}}>
      {icon}
      <Typography component="div" fontWeight="700" sx={{fontSize:"64px", color:"white"}}>
        {count}+
      </Typography>
      <Typography color="primary" sx={{fontSize:"21px",lineHeight:"25.73px"}} fontWeight="400">
        {label}
      </Typography>
    </Box>
  );
};

const Users = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id='portfolio'>
      <Box
        sx={{
          background: 'linear-gradient(45deg, black 30%, #16213e 90%)',
          width: '100%',
          
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <StatItem
                icon={<img src={user1} alt="Team Members" style={{ width: "60px", height: "60px" }} />}
                value="50"
                label="Team Members"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <StatItem
                icon={<img src={user2} alt="Project Done" style={{ width: "60px", height: "60px" }} />}
                value="200"
                label="Project Done"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <StatItem
                icon={<img src={user3} alt="Happy Customers" style={{ width: "60px", height: "60px" }} />}
                value="500"
                label="Happy Customers"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <StatItem 
                icon={<img src={user4} alt="Award Winning" style={{ width: "60px", height: "60px" }} />}
                value="75"
                label="Award Winning"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      </div>
    </ThemeProvider>
  );
};

export default Users;
