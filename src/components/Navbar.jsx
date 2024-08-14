import React, { useState } from "react";
import { Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../data/LOGO (1).png";
// import magnify from "../data/magnify.png"
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ backgroundColor: "#000000", display: "flex" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={logo} style={{ width: "244px", height: "92px" }} alt="Logo" />
        </Box>
        <Box
          sx={{
            fontSize: "21px",
            lineHeight: "31.5px",
            fontWeight: 500,
            color: "#FFFFFF",
            display: { xs: "none", sm: "none",md:"flex" }, 
            alignItems: "center",
            gap: "17px",
            maxWidth: "939px",
            height: "72px",
            fontFamily:"Poppins"
          }}
        >
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>Home</Box>
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>About Us</Box>
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>Services</Box>
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>Portfolio</Box>
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>Pages</Box>
          <Box sx={{ padding: "10px 18px 10px 18px","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>Contact Us</Box>
          <Box sx={{ padding: "10px 18px 10px 18px",display:"flex",justifyContent:"center",alignItems:"center","&:hover": {
                borderBottom: "2px solid #6D95FC",
              }, }}>
            {/* <img src={magnify} style={{ width: "24px", height: "24px" }} alt="Search" /> */}
            <SearchIcon style={{ width: "24px", height: "24px", color: "#6D95FC", }} />
          </Box>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Container>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#000000",
            height: "100%",
            color: "white",
          }}
          role="presentation"
        >
          <IconButton sx={{ color: "white" }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {["Home", "About Us", "Services", "Portfolio", "Pages", "Contact Us", "search"].map(
              (text, index) => (
                <ListItem button key={index} onClick={toggleDrawer(false)}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

