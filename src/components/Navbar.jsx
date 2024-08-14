import React, { useState } from "react";
import { Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../data/Creatic.png";
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
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"32px",}}>
          <Box><img src={logo} style={{ width: "222px", height: "66px" }} alt="Logo" /></Box>
          <Box sx={{color:"white",fontSize:"14px",lineHeight:"21px",fontWeight:400,}}>CREATIVE AGENCY</Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: "21px", sm: "21px",md:"12px",lg:"21px" }, 
            lineHeight: "31.5px",
            fontWeight: 500,
            color: "#FFFFFF",
            display: { xs: "none", sm: "none",md:"flex" }, 
            alignItems: "center",
            gap: { xs: "21px", sm: "21px",md:"3px",lg:"17px" },
            maxWidth: "939px",
            height: "72px",
            
          }}
        >
          <a href="#home" style={{ textDecoration:"none",color:"white",padding: "10px 10px 10px 10px","&:hover": {
                color: "#6D95FC",
              }, }}>Home</a>
          <a href="#aboutus" style={{ textDecoration:"none",color:"white",padding: "10px 18px 10px 18px","&:hover": {
                color: "#6D95FC",
              }, }}>About Us</a>
          <a href="#service" style={{textDecoration:"none",color:"white", padding: "10px 18px 10px 18px","&:hover": {
                color: "#6D95FC",
              }, }}>Services</a>
          <a href="#portfolio" style={{textDecoration:"none",color:"white", padding: "10px 18px 10px 18px","&:hover": {
                color: "#6D95FC",
              }, }}>Portfolio</a>
          <a href="#pages" style={{textDecoration:"none",color:"white", padding: "10px 18px 10px 18px","&:hover": {
                color: "#6D95FC",
              }, }}>Pages</a>
          <a href="#contactus" style={{textDecoration:"none",color:"white", padding: "10px 18px 10px 18px","&:hover": {
               color: "#6D95FC",
              }, }}>Contact Us</a>
          <a href="home" style={{textDecoration:"none",color:"white", padding: "10px 18px 10px 18px",display:"flex",justifyContent:"center",alignItems:"center","&:hover": {
                color: "#6D95FC",
              }, }}>
            <SearchIcon style={{ width: "24px", height: "24px", color: "#6D95FC", }} />
          </a>
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

