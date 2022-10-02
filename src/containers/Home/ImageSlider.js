import React, { useEffect, useState } from "react";
import "../../assets/styles/ImageSlider.css";
import bannerImages from "../../data/bannerImages";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion, AnimatePresence } from "framer-motion";

function ImageSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  let slideInterval;
  let intervalTime = 5000;

  function prevBanner() {
    setAutoScroll(false);
    setCurrentBanner(
      currentBanner > 0 ? (prev) => prev - 1 : bannerImages.length - 1
    );
  }

  function nextBanner() {
    setAutoScroll(false);
    setCurrentBanner(
      currentBanner < bannerImages.length - 1 ? (prev) => prev + 1 : 0
    );
  }

  function nextAutoBanner() {
    if (currentBanner < bannerImages.length - 1) {
      setCurrentBanner((prev) => prev + 1);
    } else {
      setCurrentBanner(0);
      setAutoScroll(false);
    }
  }

  function autoBanner() {
    slideInterval = setInterval(() => nextAutoBanner(), intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      autoBanner();
    }
    return () => clearInterval(slideInterval);
  }, [currentBanner]);


  return (
    <>
      <AnimatePresence initial={false}>
        <div className="imageSlider__arrowLeft" onClick={prevBanner}>
          <ArrowBackIosIcon className="imageSlider__arrow" />
        </div>
        <div className="imageSlider__arrowRight" onClick={nextBanner}>
          <ArrowForwardIosIcon className="imageSlider__arrow" />
        </div>
        <motion.img          
          initial= {{ x: 200, opacity: 0 }}
          animate= {{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          className="imageSlider__slideImage"
          src={bannerImages[currentBanner].src}
          alt="amazon banner"
          key={currentBanner}
        />
      </AnimatePresence>
    </>
  );
}

export default ImageSlider;
