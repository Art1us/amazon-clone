import React, { useState } from "react";
import "../../assets/styles/ImageSlider.css";
import bannerImages from "../../data/bannerImages";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -500 : 500,
      opacity: 0,
    };
  },
};

function ImageSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  function paginate(newDir) {
    setPage([page + newDir, newDir]);
  }

  const imageIndex = wrap(0, bannerImages.length, page);

  return (
    <>
      <div className="imageSlider__arrowLeft" onClick={() => paginate(-1)}>
        <ArrowBackIosIcon className="imageSlider__arrow" />
      </div>
      <div className="imageSlider__arrowRight" onClick={() => paginate(1)}>
        <ArrowForwardIosIcon className="imageSlider__arrow" />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="imageSlider__slideImage"
          src={bannerImages[imageIndex].src}
          alt="amazon banner"
          key={page}
        />
      </AnimatePresence>
    </>
  );
}

export default ImageSlider;
