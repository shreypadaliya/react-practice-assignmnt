import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckIconImage from '../data/Vector.png'; 

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6D95FC',
    },
    background: {
      default: '#1a1a2e',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', 
  },
});

const WhyUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: 'linear-gradient(120deg, black 80%, #16213e 99%)',
          padding: '4rem 0 8rem 0rem',
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7.5}>
              <Box>
                <Typography sx={{ color: '#6D95FC', mb: 1, fontWeight: 400, fontSize: "21px", lineHeight: "31.5px" }}>
                  WHY US?
                </Typography>
                <Box  sx={{backgroundColor:"#6D95FC",width:"97.5px",height:"3px",marginBottom:"24.56px",}}></Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '32px', sm: '40px', md: '55px' },
                    lineHeight: "60.23px",
                    color: "white"
                  }}
                >
                  25 YEARS OF <span style={{ color: '#6D95FC' }}>EXPERIENCE</span> AS A CREATIVE AGENCY
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    width:"175px",
                    borderColor: '#6D95FC',
                    padding: '10px 25px',
                    border: "2px solid #6D95FC",
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    "&:hover": {
            transform: 'scale(1.1)',
            // backgroundColor: '#6D95FC',
          }
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.5}>
              <Box>
                <Typography sx={{ color: 'white', fontSize: "21px", fontWeight: 300, lineHeight: "34.36px",marginBottom:"32px" }}>
                  porro ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, 
                  Neque porro elit porro NeDeque porro Lorem ipsum
                </Typography>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: '6px' }}>
                    <Box
                      component="img"
                      src={CheckIconImage}
                      alt="Check Icon"
                      sx={{ height: "21px", width: "21px", mr: 1 }}
                    />
                    <Typography sx={{ fontSize: "21px", fontWeight: 300, lineHeight: "34.36px", color: "white" }}>
                      Happy Customer
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: '6px' }}>
                    <Box
                      component="img"
                      src={CheckIconImage}
                      alt="Check Icon"
                      sx={{ height: "21px", width: "21px", mr: 1 }}
                    />
                    <Typography sx={{ fontSize: "21px", fontWeight: 300, lineHeight: "34.36px", color: "white" }}>
                      Experienced Team
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center',mb: '6px' }}>
                    <Box
                      component="img"
                      src={CheckIconImage}
                      alt="Check Icon"
                      sx={{ height: "21px", width: "21px", mr: 1 }}
                    />
                    <Typography sx={{ fontSize: "21px", fontWeight: 300, lineHeight: "34.36px", color: "white" }}>
                      Modern Technology
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default WhyUs;
