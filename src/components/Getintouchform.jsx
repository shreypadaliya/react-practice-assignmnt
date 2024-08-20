import React from "react";
import {
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
    <Box
      id="contact"
      sx={{
        background: 'linear-gradient(20deg, black 70%, #16213e 99%)',
        py: "8rem",
        px: { xs: "16px", sm: "40px", md: "80px", lg: "220px" },
        overflow: 'hidden'
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "36px", sm: "48px" },
              lineHeight: { xs: "48px", sm: "72px" },
              color: "white",
            }}
          >
            GET IN{" "}
            <Typography
              component="span"
              sx={{
                color: "#6D95FC",
                fontWeight: 700,
                fontSize: { xs: "36px", sm: "48px" },
                lineHeight: { xs: "48px", sm: "72px" },
              }}
            >
              TOUCH
            </Typography>
          </Typography>
          <Box my="20px" sx={{ backgroundColor: "white", width: "97.5px", height: "2px" }}></Box>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontWeight: 300,
              fontSize: { xs: "16px", sm: "21px" },
              lineHeight: { xs: "24px", sm: "34.96px" },
              color: "white",
            }}
          >
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit Neque porro
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", gap: "27px", mb: 2.5, alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 1, color: "#3F51B5", height: "45px", width: "32px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Address</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>
                  88, Arca St, PH City, 33414, Indonesia
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "27px", mb: 2.5, alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 1, color: "#3F51B5", height: "45px", width: "32px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Call Us</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>
                  <a href="tel:+62123456789" style={{ color: "#6D95FC", textDecoration: "none" }}>(+62) 123 456 789</a>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "27px", mb: 2.5, alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "#3F51B5", height: "45px", width: "32px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "21px", lineHeight: "34.96px", color: "white" }}>Email Address</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "26.64px", color: "#6D95FC" }}>
                  <a href="mailto:info@creativagency.com" style={{ color: "#6D95FC", textDecoration: "none" }}>info@creativagency.com</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 0.5,
              background: 'linear-gradient(180deg, #16213e 20%, black 90%)',
              maxWidth: "539px",
              borderRadius: "25px",
              mx: { xs: 0, md: 3 },
              mt: { xs: 3, md: 0 },
              boxShadow: 3,
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>YOUR NAME</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ border: "1px solid white" }}
            />
            <Typography variant="body1" sx={{ color: "white" }}>YOUR EMAIL</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ border: "1px solid white" }}
            />
            <Typography variant="body1" sx={{ color: "white" }}>YOUR MESSAGE</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ border: "1px solid white" }}
              multiline
              rows={4}
            />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
              <Button
                sx={{
                  color: "#111728",
                  backgroundColor: "#6D95FC",
                  width: "188px",
                  height: "46px",
                  fontWeight: 500,
                  fontSize: "17px",
                  '&:hover': {
                    backgroundColor: "#5a8bf3"
                  }
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;

