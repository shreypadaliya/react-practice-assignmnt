import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import clientsaypic1 from "../data/Image.png";
import clientsaypic2 from "../data/Image (1).png";
import Latestproject from "./Latestproject";

const Testimonial = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ bgcolor: "black", color: "white", }}>
      {/* <Container maxWidth="xl"> */}
      <Grid container spacing={0} alignItems="center">
        {!isSmallScreen && (
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={clientsaypic1}
              alt="Left decorative image"
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "932px",
                objectFit: "cover",
              }}
            />
          </Grid>
        )}
        <Grid item xs={12} md={4}>
          <Box textAlign="center" px={2} >
            <Typography
              sx={{
                fontSize: { xs: "40px", sm: "55px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "white",
                mb: 1,
                
                paddingTop:{xs:"30px",sm:"30px",md:"0px"}
              }}
            >
              WHAT{" "}
              <span style={{ color: "#6D95FC",}}>
                OUR
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "45px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
                
              }}
            >
              CLIENTS SAY?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "21px" },
                fontWeight: 400,
                lineHeight: 1.5,
                mb: 4,
                
              }}
            >
              TESTIMONIALS
            </Typography>
            <Box mb={4}>
              <Latestproject />
            </Box>
            <Button
              variant="outlined"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                pt: 1,
                px: 2,
                color: "white",
                marginBottom:{xs:"30px",sm:"30px",md:"0px"},
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                "&:hover": {
                  transform: 'scale(1.1)',
                  // backgroundColor: '#6D95FC',
                }
              }}
            >
              VIEW ALL TESTIMONIALS
            </Button>
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={clientsaypic2}
              alt="Right decorative image"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "932px",
                objectFit: "cover",
              }}
            />
          </Grid>
        )}
      </Grid>
      {/* </Container> */}
    </Box>
  );
};
export default Testimonial;