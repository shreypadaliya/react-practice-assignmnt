import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  Box, 
  Button, 
  Grid, 
  Typography, 
  Container
} from '@mui/material';
import aboutimg from "../data/—Pngtree—artificial intelligence management system robot_5339376 1.png"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6D95FC', 
    },
    background: {
      default: '#000000',
    },
  },
});

function Aboutus() {
  return (
    <ThemeProvider theme={theme}>
      <div id='aboutus'>
      <Box sx={{ 
        paddingTop:"178px",
        paddingBottom:"170px", 
        display: 'flex', 
        alignItems: 'center', 
        background: 'linear-gradient(300deg, black 60%, #16213e 99%)',
        
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
              <Box
                component="img"
                src={aboutimg} 
                alt="Friendly robot"
                sx={{ width: '100%', height: 'auto', maxWidth: 400, margin: { xs: '0 auto', md: '0' }, display: 'block' }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
              <Box>
                <Typography variant="h6" color="primary" sx={{fontSize:"21px", fontWeight:500, lineHeight:"31.5px", paddingBottom:"26px", }}>
                  ABOUT US
                </Typography>
                <Typography variant="h3" component="h1" gutterBottom color="white" sx={{fontSize:"48px", fontWeight:700, lineHeight:"60px", }}>
                  We Bring <Box component="span" color="primary.main">Creative</Box> Ideas <br />To Life.
                </Typography>
                <Box  sx={{backgroundColor:"white", width:"97.5px", height:"3px",marginTop:"26px",marginBottom:"26px"}}></Box>
                <Typography variant="subtitle1" color="#6D95FC" sx={{paddingBottom:"26px",}}>
                  We Love Creating
                </Typography>
                <Typography variant="body1" paragraph color="white" sx={{fontSize:"21px", fontWeight:300, lineHeight:"35px", }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                </Typography>
                <Typography variant="body1" paragraph color="white" sx={{fontSize:"21px", fontWeight:300, lineHeight:"35px", }}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                </Typography>
                <Button variant="outlined" sx={{
                  width:"175px",
                  color:"white",
                  marginTop:"26px",
                  padding:"10px 30px",
                  border:"2px solid #6D95FC",
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  "&:hover": {
                    transform: 'scale(1.1)',
                  }
                }}>
                  READ MORE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </div>
    </ThemeProvider>
  );
}

export default Aboutus;












// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { 
//   Box, 
//   Button, 
//   Grid, 
//   Typography, 
//   Container
// } from '@mui/material';
// import aboutimg from "../data/—Pngtree—artificial intelligence management system robot_5339376 1.png"

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#6D95FC', 
//     },
//     background: {
//       default: '#000000',
//     },
//   },
// });

// function Aboutus() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ 
//         // minHeight: '100vh',
//         paddingTop:"178px",
//         paddingBottom:"90px", 
//         display: 'flex', 
//         alignItems: 'center', 
//         background: 'linear-gradient(300deg, black 60%, #16213e 99%)',
//         
//       }}>
//         <Container>
//           <Grid container spacing={3} alignItems="center" >
//             <Grid item xs={12} md={6} >
//               <Box
//                 component="img"
//                 src={aboutimg} 
//                 alt="Friendly robot"
//                 sx={{ width: '100%', height: 'auto', maxWidth: 400, }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6} >
//               <Box >
//                 <Typography variant="h6" color="primary"  sx={{fonstsize:"21px",fontWeight:500,lineHeight:"31.5px",paddingBottom:"26px",}}>
//                   ABOUT US
//                 </Typography>
//                 <Typography variant="h3" component="h1" gutterBottom color="white" sx={{fonstsize:"48px",fontWeight:700,lineHeight:"60px",}}>
//                   We Bring <Box component="span" color="primary.main">Creative</Box> Ideas To Life.
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom color="#6D95FC" sx={{}}>
//                   We Love Creating
//                 </Typography>
//                 <Box my="20px" sx={{backgroundColor:"white",width:"97.5px",height:"3px"}}></Box>
//                 <Typography variant="body1" paragraph color="white"  sx={{fonstsize:"21px",fontWeight:300,lineHeight:"35px",}}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
//                 </Typography>
//                 <Typography variant="body1" paragraph color="white"  sx={{fonstsize:"21px",fontWeight:300,lineHeight:"35px",}}>
//                   Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
//                 </Typography>
//                 <Button variant="outlined" sx={{padding:"10px 25px",color:"white",transition: 'transform 0.3s ease, background-color 0.3s ease',
//           "&:hover": {
//             transform: 'scale(1.1)',
//           }}}>
//                   READ MORE
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default Aboutus;

