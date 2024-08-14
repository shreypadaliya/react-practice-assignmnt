import React, { Component } from "react";
import Slider from "react-slick";
import sliderpic from "../data/rm369-033a 1.png"
import sliderpic2 from "../data/pexels-motional-studio-1081685 (1) 1.png"
import sliderpic3 from "../data/gradient-ai-cloud-with-broken-pieces 1.png"
import { Box } from "@mui/material";

function CenterMode() {

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true, 
    autoplay: true, 
    autoplaySpeed: 20000, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Box >
          <img src={sliderpic} alt="Slider 1" style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box>
          <img src={sliderpic2} alt="Slider 2" style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box>
          <img src={sliderpic3} alt="Slider 3" style={{ width: "100%", height: "auto" }} />
        </Box>
          <Box>
            <img src={sliderpic} alt="Slider 4" style={{ width: "100%", height: "auto" }} />
          </Box>
          <Box>
            <img src={sliderpic2} alt="Slider 5" style={{ width: "100%", height: "auto" }} />
          </Box>
          <Box>
            <img src={sliderpic3} alt="Slider 6" style={{ width: "100%", height: "auto" }} />
          </Box>
      </Slider>
    </div>
  );
}
export default CenterMode;
