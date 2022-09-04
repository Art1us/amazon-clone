import React, { useState } from "react";
import "../../assets/styles/ImageSlider.css";
import bannerImages from "../../data/bannerImages";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ImageSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);

  function prevBanner() {
    if (currentBanner > 0) {
      setCurrentBanner((prev) => prev - 1);
    } else {
      setCurrentBanner(bannerImages.length - 1);
    }
  }

  function nextBanner() {
    if (currentBanner < bannerImages.length - 1) {
      setCurrentBanner((prev) => prev + 1);
    } else {
      setCurrentBanner(0);
    }
  }

  return (
    <>
      <div className="imageSlider__arrowLeft" onClick={prevBanner}>
        <ArrowBackIosIcon className="imageSlider__arrow" />
      </div>
      <div className="imageSlider__arrowRight" onClick={nextBanner}>
        <ArrowForwardIosIcon className="imageSlider__arrow" />
      </div>
      <img
        className="imageSlider__image"
        src={bannerImages[currentBanner].src}
        alt="amazon banner"
      />
    </>
  );
}

export default ImageSlider;
