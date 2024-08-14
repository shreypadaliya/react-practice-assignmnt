import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from "../data/Creatic.png";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        background: 'linear-gradient(180deg, black 50%, #16213e 90%)',
        color: '#fff',
        py: 4,
        textAlign: 'center',
        

      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 0 ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Box sx={{color:"#6D95FC",fontSize:"50px",lineHeight:"55px",fontWeight:600,}}>CREATIC</Box>
            <Box sx={{color:"white",fontSize:"14px",lineHeight:"21px",fontWeight:400,paddingTop:"9px"}}>CREATIVE AGENCY</Box>
            <Box sx={{ backgroundColor: "white", width: "97.5px", height: "2px",justifyContent:"center",marginTop:"19px"}}></Box>
        </Box>
        
        <Box sx={{ mb: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Categories', 'About', 'Services', 'Portfolio', 'Pages', 'Support'].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                color: '#6D95FC',
                mx: 1,
                my: 0.5,
                padding:"10px",gap:"10px",
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
                fontWeight:500,
                fontSize:"21px",lineHeight:"31.5px"
              }}
            >
              {item}
            </Link>
          ))}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ maxWidth: '600px', mx: 'auto',fontWeight:300,fontSize:"21px",lineHeight:"34.95px" }}>
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum
            quia dolor sit amet, Neque porro elit NeDque
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <InstagramIcon />
          </Link>
          <Link href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <WhatsAppIcon />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <LinkedInIcon />
          </Link>
          <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <PinterestIcon />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#6D95FC', mx: 1 }}>
            <TwitterIcon />
          </Link>
        </Box>

        <Box  sx={{paddingTop:{xs:"30px",sm:"50px",md:"100px",lg:"180px"},paddingBottom:{xs:"15px",sm:"25px",md:"45px",lg:"77px"}}}>
          <Typography sx={{fontWeight:300,fontSize:"14px"}}>
            Copyright © 2023-2023 Creatic Agency All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
