import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coomas from "../data/Coomas.png";
import eclips from "../data/Ellipse 1.png";
import { Box, Typography, Avatar } from '@mui/material';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(currentSlide);
    }
  }, [currentSlide]);

  const carouselItems = Array.from({ length: 5 }, (_, index) => (
    <Box key={index} sx={{
      padding: "16px",
      background: "linear-gradient(45deg, black 30%, #16213e 90%)",
      borderRadius: "10px",
    }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={eclips} alt={`User ${index + 1}`} sx={{ width: 64, height: 64 }} />
          <Box sx={{ marginLeft: "16px" }}>
            <Typography variant="subtitle1" sx={{ fontSize: "14px", fontWeight: 600, color: "white" }}>
              Carol Chaves
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "12px", color: "#6B7280" }}>
              @caroles.gmail.com
            </Typography>
          </Box>
        </Box>
        <Box sx={{ alignSelf: "flex-start", paddingTop: "16px" }}>
          <img src={coomas} alt="Quote" style={{ height: "32px", width: "30px" }} />
        </Box>
      </Box>
    </Box>
  ));

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const defStyle = { backgroundColor: "white", display: "inline-block", margin: "0 8px", cursor: "pointer", width: "10px", height: "10px", borderRadius: "50%" };
    const style = isSelected
      ? { ...defStyle, backgroundColor: "#6D95FC" }
      : { ...defStyle };
    return (
      <span
        style={style}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      height: "314px",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      marginInline: "auto",
      background: "linear-gradient(45deg, black 30%, #16213e 90%)",
      borderRadius: "38px",
      padding: "38px 57px 34px 67px",
    }}>
      <Box>
        <Box>
          <Typography variant="body1" sx={{ color: "white", textAlign: "center", mb: 3 }}>
            Lorem ipsum Neque porro quisquam <br /> est qui do lorem ipsum quia dolor sit <br />
            amet, Neque porro elit
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}>
            <Carousel
              ref={carouselRef}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={false}
              selectedItem={currentSlide}
              onChange={setCurrentSlide}
              interval={2000}
              stopOnHover={true}
              swipeable={true}
              emulateTouch={true}
            >
              {carouselItems}
            </Carousel>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            {Array.from({ length: 5 }).map((_, index) => 
              renderIndicator(
                () => setCurrentSlide(index),
                currentSlide === index,
                index,
                `Select slide ${index + 1}`
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCarousel;





// import React, { useRef, useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import coomas from "../data/Coomas.png";
// import eclips from "../data/Ellipse 1.png";
// import { Box, Typography, Avatar } from '@mui/material';

// const ImageCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.moveTo(currentSlide);
//     }
//   }, [currentSlide]);

//   const carouselItems = Array.from({ length: 5 }, (_, index) => (
//     <Box key={index} sx={{
//       padding: "16px",
//       background: "linear-gradient(45deg, black 30%, #16213e 90%)",
//       borderRadius: "10px",
//     }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Avatar src={eclips} alt={`User ${index + 1}`} sx={{ width: 64, height: 64 }} />
//           <Box sx={{ marginLeft: "16px" }}>
//             <Typography variant="subtitle1" sx={{ fontSize: "14px", fontWeight: 600, color: "white" }}>
//               Carol Chaves
//             </Typography>
//             <Typography variant="body2" sx={{ fontSize: "12px", color: "#6B7280" }}>
//               @caroles.gmail.com
//             </Typography>
//           </Box>
//         </Box>
//         <Box sx={{ alignSelf: "flex-start", paddingTop: "16px" }}>
//           <img src={coomas} alt="Quote" style={{ height: "20px", width: "48px" }} />
//         </Box>
//       </Box>
//     </Box>
//   ));

//   return (
//     <Box sx={{
//       display: "flex",
//       flexDirection: "column",
//       // minWidth: "448px",
//       height: "314px",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "300px",
//       marginInline:"auto",
//       background: "linear-gradient(45deg, black 30%, #16213e 90%)",
//       borderRadius: "38px",
//       padding: "38px 57px 34px 67px",
//     }}>
//     <Box>
//     <Box>
//     <Typography variant="body1" sx={{ color: "white", textAlign: "center", mb: 3 }}>
//         Lorem ipsum Neque porro quisquam <br /> est qui do lorem ipsum quia dolor sit <br />
//         amet, Neque porro elit
//       </Typography>
//       <Box sx={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}>
//         <Carousel
//           ref={carouselRef}
//           showArrows={false}
//           showStatus={false}
//           showIndicators={true}
//           infiniteLoop={true}
//           autoPlay={false}
//           selectedItem={currentSlide}
//           onChange={setCurrentSlide}
//           interval={2000}
//           stopOnHover={true}
//           swipeable={true}
//           emulateTouch={true}
//           renderIndicator={(onClickHandler, isSelected, index, label) => {
//             const defStyle = { backgroundColor: "white", display: "inline-block", margin: "0 8px", cursor: "pointer", width: "10px", height: "10px", borderRadius: "50%" };
//             const style = isSelected
//               ? { ...defStyle, backgroundColor: "#6D95FC" }
//               : { ...defStyle };
//             return (
//               <span
//                 style={style}
//                 onClick={onClickHandler}
//                 onKeyDown={onClickHandler}
//                 value={index}
//                 key={index}
//                 role="button"
//                 tabIndex={0}
//                 aria-label={`${label} ${index + 1}`}
//               />
//             );
//           }}
//         >
//           {carouselItems}
//         </Carousel>
//       </Box>
//     </Box>
//     </Box>
//     </Box>
//   );
// };

// export default ImageCarousel;