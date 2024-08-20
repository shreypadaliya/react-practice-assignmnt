import { Box,Slide,Typography } from '@mui/material'
import React from 'react'
import Slider from "./Slider"

const Ourprojects = () => {
  return (
    <Box sx={{backgroundColor:"black",width:"100%",paddingTop:"94px",}}>
      <Typography sx={{color:"white",textAlign:"center",fontWeight:700,fontSize:"48px",lineHeight:"65.5px",paddingBottom:"49px"}}>
        ENJOY OUR  <Typography sx={{textAlign:"center",fontWeight:800,fontSize:"48px",lineHeight:"65.5px",}} component="span" color="#6D95FC" variant="h3">LATEST <br /> </Typography> PROJECTS
      </Typography>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"17px"}}>
        <Box sx={{backgroundColor:"white",width:"97.5px",height:"3px"}}></Box>
        <Box sx={{color:"#6D95FC",fontWeight:500,fontSize:"21px"}}>OUR WORK</Box>
        <Box sx={{backgroundColor:"white",width:"97.5px",height:"3px"}}></Box>
      </Box>
      <Box sx={{width:"100%",paddingTop:"49px"}}>
        <Slider/>
      </Box>
    </Box>
  )
}

export default Ourprojects  
