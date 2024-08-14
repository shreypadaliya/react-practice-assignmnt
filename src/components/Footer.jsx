import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from "../data/LOGO (1).png";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        background: 'linear-gradient(180deg, black 50%, #16213e 90%)',
        color: '#fff',
        py: 4,
        textAlign: 'center',
        fontFamily:"Poppins"

      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
            <img src={logo} alt="" style={{width:"244px",height:"94px"}} />
        </Box>

        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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

        <Box paddingTop="180px" paddingBottom="77px">
          <Typography variant="caption">
            Copyright © 2023-2023 Creatic Agency All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
