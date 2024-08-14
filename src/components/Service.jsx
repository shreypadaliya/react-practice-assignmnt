import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import video from "../data/Video Icon.png"
import graphic from "../data/graphic icon.png"
import web from "../data/Web icon.png"

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a3136',
  borderRadius: '8px',
  padding: theme.spacing(3),
  textAlign: 'center',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

function ServicesSection() {
  return (
    <Box sx={{ backgroundColor: '#000000', py: { xs: 5, md: 9 } ,border:"1px solid black",}}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center" >
          <Grid item xs={12} md={6}>
            <Typography  color="#6D95FC" gutterBottom sx={{fontWeight:500,fontSize:"21px",lineHeight:"31.5px",paddingBottom:"32px",fontFamily:"Poppins"}}>
              OUR SERVICES
            </Typography>
            <Typography variant="h3" color="white" gutterBottom sx={{fontFamily:"Poppins"}}>
              Experience The Power <br /> Of <Typography sx={{fontFamily:"Poppins"}} component="span" color="#6D95FC" variant="h3">Innovation.</Typography>
            </Typography>
            <Box my="32px" sx={{backgroundColor:"white",width:"97.5px",height:"3px"}}></Box>
            <Typography  color="white" paragraph sx={{fontWeight:300,fontSize:"21px",lineHeight:"34.96px",fontFamily:"Poppins"}}>
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,
              Neque porro elit Neque porro Neque porro quisquam est qui do lorem ipsum
              quia dolor sit amets ipsum.
            </Typography>
            <Button variant="outlined"  sx={{padding:"10px 25px",color:"white",transition: 'transform 0.3s ease, background-color 0.3s ease',
          "&:hover": {
            transform: 'scale(1.1)',
            // backgroundColor: '#6D95FC',
          }}}>
              VIEW ALL
            </Button>
          </Grid> 
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <ServiceCard sx={{background: 'linear-gradient(120deg, black 0%, #151515 90%)',transition: 'transform 0.3s ease',
              "&:hover": {
                transform: 'scale(1.05)',
              }}}>
                  <img  src={video} style={{ fontSize: 50, mb: 2 }} />
                  <Typography sx={{fontWeight:600,fontSize:"21px",lineHeight:"31.5px",fontFamily:"Poppins"}} color="#6D95FC" gutterBottom>
                  VIDEO MARKETING
                  </Typography>
                  <Typography sx={{fontWeight:300,fontSize:"17px",lineHeight:"20.83px",fontFamily:"Poppins"}}>
                    Lorem ipsum Neque do porro quisquam est qui do quam
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard sx={{background: 'linear-gradient(10deg, black 50%, #16213e 99%)',transition: 'transform 0.3s ease',
              "&:hover": {
                transform: 'scale(1.05)',
              }}}>
                  <img  src={graphic} style={{ fontSize: 50, mb: 2 }} />
                  <Typography sx={{fontWeight:600,fontSize:"21px",lineHeight:"31.5px",fontFamily:"Poppins"}} color="#6D95FC" gutterBottom>
                    GRAPHIC DESIGN
                  </Typography>
                  <Typography sx={{fontWeight:300,fontSize:"17px",lineHeight:"20.83px",fontFamily:"Poppins"}}>
                    Lorem ipsum Neque do porro quisquam est qui do quam
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard sx={{background: 'linear-gradient(170deg, black 50%, #16213e 99%)',transition: 'transform 0.3s ease',
              "&:hover": {
                transform: 'scale(1.05)',
              }}}>
                <img  src={video} style={{ fontSize: 50, mb: 2 }} />
                  <Typography sx={{fontWeight:600,fontSize:"21px",lineHeight:"31.5px",fontFamily:"Poppins"}} color="#6D95FC" gutterBottom>
                    UI/UX DESIGN
                  </Typography>
                  <Typography  sx={{fontWeight:300,fontSize:"17px",lineHeight:"20.83px",fontFamily:"Poppins"}}>
                    Lorem ipsum Neque do porro quisquam est qui do quam
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard sx={{background: 'linear-gradient(120deg, black 0%, #151515 90%)',transition: 'transform 0.3s ease',
              "&:hover": {
                transform: 'scale(1.05)',
              }}}> 
                <img  src={web} style={{ fontSize: 50, mb: 2 }} />
                  <Typography sx={{fontWeight:600,fontSize:"21px",lineHeight:"31.5px",fontFamily:"Poppins"}} color="#6D95FC" gutterBottom>
                    WEBSITE DESIGN
                  </Typography>
                  <Typography sx={{fontWeight:300,fontSize:"17px",lineHeight:"20.83px",fontFamily:"Poppins"}}>
                    Lorem ipsum Neque do porro quisquam est qui do quam
                  </Typography>
                </ServiceCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;
