
import { Box, Button, useTheme, useMediaQuery, Container, Typography } from '@mui/material'
import React from 'react'
import women from "../data/beautiful-woman-with-big-jewel 1 (1).png"

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div id='home'>
      <Box sx={{
      backgroundColor: "black",
      minHeight: '100vh',
      
      overflow: 'hidden',
      position: 'relative',
    }}>
      <Container maxWidth="xl">
        <Box sx={{
          display: "grid",
          
          gridTemplateColumns: { xs: '1fr', md: '60% 40%' },
          gridTemplateRows: { xs: 'auto auto', md: '1fr' },
          minHeight: '100vh',
        }}>
          <Box sx={{
            gridColumn: '1 / 2',
            gridRow: '1 / 2',
            padding: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            
            maxWidth: { md: '800px' }
          }}>
            <Box sx={{
              color: "#6D95FC",
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
              fontWeight: 500,
              marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' },
              textTransform: "uppercase",
              fontFamily:"poppins",
            }}>
              Welcome to creatic
            </Box>
            <Box sx={{
              fontSize: { xs: '20px', sm: '30px', md: '60px', lg: '80px' },
              fontWeight: 800,
              lineHeight: 1.1,
              fontFamily:"poppins",
              color: "white",
              marginBottom: { xs: '20px', sm: '30px', md: '43px' },
            }}>
              WE ARE <Typography sx={{color:"#6D95FC",fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },fontWeight: 800,lineHeight: 1.1,display:"inline"}}> CREATIVE</Typography> DESIGN AGENCY
            </Box>
            <Box sx={{
              width: '144px',
              border: "2px solid #6D95FC",
              marginBottom: { xs: '20px', sm: '30px', md: '43px' }
            }}></Box>
            <Box sx={{
              color: "white",
              fontWeight: 300,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.5,
              marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem', },
              maxWidth: '100%',fontFamily:"poppins",
              

            }}>
              Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum
            </Box>
            <Button sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              fontWeight: 400,
              borderRadius: '3px',
              border: '3px solid #6D95FC',
              color: 'white',
              alignSelf: 'flex-start',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              "&:hover": {
                transform: 'scale(1.1)',
              },
              width:"175px"
            }}>
              GET IN TOUCH
            </Button>
          </Box>
          <Box sx={{
            gridColumn: { xs: '1 / 2', md: '2 / 3' },
            gridRow: { xs: '2 / 3', md: '1 / 2' },
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(deg, black 50%, #16213e 100%)',
            height: { xs: '300px', sm: '400px', md: 'auto' },
            
            alignSelf: 'stretch',
          }}>
            <img 
              src={women} 
              alt="Beautiful woman with big jewel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
    </div>
  )
}

export default Home


// import { Box, Button, useTheme, useMediaQuery, Container, Typography } from '@mui/material'
// import React from 'react'
// import women from "../data/beautiful-woman-with-big-jewel 1 (1).png"

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   return (
//     <Box sx={{
//       backgroundColor: "black",
//       minHeight: '100vh',
//       fontFamily: "Poppins",
//       overflow: 'hidden',
//       position: 'relative',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
//           gridTemplateRows: { xs: 'auto auto', md: '1fr' },
//           minHeight: '100vh',
//         }}>
//           <Box sx={{
//             gridColumn: '1 / 2',
//             gridRow: '1 / 2',
//             padding: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
//             zIndex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}>
//             <Box sx={{
//               color: "#6D95FC",
//               fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
//               fontWeight: 500,
//               marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' },
//               textTransform: "uppercase",
//             }}>
//               Welcome to creatic
//             </Box>
//             <Box sx={{
//               fontSize: { xs: '20px', sm: '30px', md: '60px', lg: '80px' },
//               fontWeight: 800,
//               lineHeight: 1.1,
//               color: "white",
//               marginBottom: { xs: '20px', sm: '30px', md: '43px' },
//             }}>
//               WE ARE <Typography sx={{color:"#6D95FC",fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },fontWeight: 800,lineHeight: 1.1,display:"inline"}}> CREATIVE</Typography> DESIGN AGENCY
//             </Box>
//             <Box sx={{
//               width: '144px',
//               border: "2px solid #6D95FC",
//               marginBottom: { xs: '20px', sm: '30px', md: '43px' }
//             }}></Box>
//             <Box sx={{
//               color: "white",
//               fontWeight: 300,
//               fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
//               lineHeight: 1.5,
//               marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' },
//               maxWidth: '100%',
//             }}>
//               Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum
//             </Box>
//             <Button sx={{
//               fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
//               fontWeight: 400,
//               // padding: '10px 25px',
//               borderRadius: '3px',
//               border: '3px solid #6D95FC',
//               color: 'white',
//               alignSelf: 'flex-start',
//               transition: 'transform 0.3s ease, background-color 0.3s ease',
//               "&:hover": {
//                 transform: 'scale(1.1)',
//               },
//               width:"175px"
//             }}>
//               GET IN TOUCH
//             </Button>
//           </Box>
//           <Box sx={{
//             gridColumn: { xs: '1 / 2', md: '2 / 3' },
//             gridRow: { xs: '2 / 3', md: '1 / 2' },
//             position: 'relative',
//             overflow: 'hidden',
//             height: { xs: '300px', sm: '400px', md: 'auto' },
            
//           }}>
//             <img 
//               src={women} 
//               alt="Beautiful woman with big jewel"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 objectPosition: 'center',
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//               }}
//             />
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default Home