import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const GetInTouch = () => {
  return (
    <Box sx={{ background: 'linear-gradient(20deg, black 70%, #16213e 99%)', fontFamily: "Poppins" }} py="3rem">
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: "black" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={5}>
            <Typography
              component="h1"
              gutterBottom
              style={{
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "72px",
                color: "white",
              }}
            >
              GET IN{" "}
              <Typography
                component="span"
                color="#6D95FC"
                style={{
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "72px",
                }}
              >
                TOUCH
              </Typography>
            </Typography>
            <Box my="20px" sx={{ backgroundColor: "white", width: "97.5px", height: "3px" }}></Box>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontWeight: 300,
                fontSize: "21px",
                lineHeight: "34.96px",
                color: "white",
              }}
            >
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit Neque porro
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: "flex", gap: "27px", mb: 2, alignItems: "center" }}>
                <Box><LocationOnIcon sx={{ mr: 1, color: "#3F51B5" }} /></Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Address</Box>
                  <Box sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>88, Arca St, PH City, 33414, Indonesia</Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "27px", mb: 2, alignItems: "center" }}>
                <Box><PhoneIcon sx={{ mr: 1, color: "#3F51B5" }} /></Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Call Us</Box>
                  <Box sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>
                    <a href="tel:+62123456789" style={{ color: "#6D95FC", textDecoration: "none" }}>(+62) 123 456 789</a>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "27px", mb: 2, alignItems: "center" }}>
                <Box><EmailIcon sx={{ mr: 1, color: "#3F51B5" }} /></Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Email Address</Box>
                  <Box sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>
                    <a href="mailto:info@creativagency.com" style={{ color: "#6D95FC", textDecoration: "none" }}>info@creativagency.com</a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            background: 'linear-gradient(to right, rgba(18, 25, 43, 1) 100%, rgba(18, 25, 43, 0) 0%)', maxWidth: "539px", borderRadius: "34px", marginLeft: { xs: "0px", sm: "0px", md: "30px", lg: "90px" },
            marginTop: { xs: "30px", sm: "0px" }
          }}>
            <Box
              component="form"
              sx={{ bgcolor: "background.paper", p: 4, borderRadius: 2, background: 'linear-gradient(to right, rgba(18, 25, 43, 1) 100%, rgba(18, 25, 43, 0) 0%)', }}
            >
              <label style={{ color: "white", alignItems: "center" }}>YOUR NAME</label>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ border: "1px solid white" }}
              />
              <label style={{ color: "white" }}>YOUR EMAIL</label>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ border: "1px solid white" }}
              />
              <label style={{ color: "white" }}>YOUR MESSAGE</label>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ border: "1px solid white" }}
                multiline
                rows={4}
              />
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button variant="contained" sx={{ mt: 2, color: "#111728", }}>
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
