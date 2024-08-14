import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import video from "../data/Video Icon.png";
import graphic from "../data/graphic icon.png";
import web from "../data/Web icon.png";

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a3136",
  borderRadius: "8px",
  // padding: theme.spacing(3),
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

function ServicesSection() {
  return (
    <div id="service">
      <Box
      sx={{
        backgroundColor: "#000000",
        py: { xs: 5, md: 9 },
        border: "1px solid black",
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              color="#6D95FC"
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                lineHeight: "31.5px",
                paddingBottom: "32px",
                
              }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              color="white"
              gutterBottom
              sx={{
                
                fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "48px" },
                fontWeight: 700,
              }}
            >
              Experience The Power <br /> Of{" "}
              <Typography
                sx={{
                  
                  fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "48px" },
                  fontWeight: 700,
                }}
                component="span"
                color="#6D95FC"
              >
                Innovation.
              </Typography>
            </Typography>
            <Box
              my="32px"
              sx={{ backgroundColor: "white", width: "97.5px", height: "3px" }}
            ></Box>
            <Typography
              color="white"
              paragraph
              sx={{
                fontWeight: 300,
                fontSize: "21px",
                lineHeight: "34.96px",
                
              }}
            >
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit Neque porro Neque porro quisquam est
              qui do lorem ipsum quia dolor sit amets ipsum.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "2px solid #6D95FC",
                padding: "10px 25px",
                width: "145px",
                color: "white",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  // backgroundColor: '#6D95FC',
                },
              }}
            >
              VIEW ALL
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} >
              <Grid item xs={12} sm={6}>
                <ServiceCard
                  sx={{ borderRadius:"0px", height:"280px",
                    background:
                      "linear-gradient(120deg, black 0%, #151515 90%)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img src={video} style={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "31.5px",
                      
                      paddingTop:"16px"
                    }}
                    color="#6D95FC"
                    
                  >
                    VIDEO MARKETING
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "17px",
                      lineHeight: "20.83px",
                      
                    }}
                  >
                    Lorem ipsum Neque do porro quisquam est qui do quam quisq est Neque
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard
                  sx={{borderRadius:"0px",height:"280px",
                    background:
                      "linear-gradient(10deg, black 50%, #16213e 99%)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img src={graphic} style={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "31.5px",
                     
                      paddingTop:"16px"
                    }}
                    color="#6D95FC"
                    
                  >
                    GRAPHIC DESIGN
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "17px",
                      lineHeight: "20.83px",
                      
                    }}
                  >
                    Lorem ipsum Neque do porro quisquam est qui do quam quisq est Neque
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard
                  sx={{borderRadius:"0px",height:"280px",
                    background:
                      "linear-gradient(170deg, black 50%, #16213e 99%)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img src={video} style={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "31.5px",
                      
                      paddingTop:"16px"
                    }}
                    color="#6D95FC"
                    
                  >
                    UI/UX DESIGN
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "17px",
                      lineHeight: "20.83px",
                      
                    }}
                  >
                    Lorem ipsum Neque do porro quisquam est qui do quam quisq est Neque
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ServiceCard
                  sx={{borderRadius:"0px",height:"280px",
                    background:
                      "linear-gradient(120deg, black 0%, #151515 90%)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img src={web} style={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "31.5px",
                      
                      paddingTop:"16px"
                    }}
                    color="#6D95FC"
                    
                  >
                    WEBSITE DESIGN
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "17px",
                      lineHeight: "20.83px",
                     
                    }}
                  >
                    Lorem ipsum Neque do porro quisquam est qui do quam quisq est Neque
                  </Typography>
                </ServiceCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default ServicesSection;
