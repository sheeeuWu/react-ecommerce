import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 }, //show 1 item when width range: 0 - 720
    720: { items: 3 }, //show 3 items width when range: 720 - 1024
    1024: { items: 5.5 }, //show 5.5 items width when range: 1024 and above
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>{
    if(activeIndex < items.length-1) setActiveIndex(activeIndex+1);
  } 

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  // console.log(syncActiveIndex);

  const items = data.slice(activeIndex,10).map((item) => <HomeSectionCard product={item} />);
  // console.log("index....", items );


  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-8 text-left">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== 0 && 
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        }

        {activeIndex < items.length - 1 && 
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;



