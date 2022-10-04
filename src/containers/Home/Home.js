import React, { useEffect, useState } from "react";
import "../../assets/styles/Home.css";
import FullWidthBanner from "../../components/FullWidthBanner";
import ProductRow from "../../components/ProductRow";
import { bannersArray } from "../../data/productsData";
import ImageSlider from "./ImageSlider";

function Home() {
  const [rowLength, setRowLength] = useState(4);

  useEffect(() => {
    window.addEventListener("resize", () => setRowLength(determineRowLength()));
  }, );

  function determineRowLength() {
    switch (true) {
      case window.innerWidth < 625:
        return 1;
      case window.innerWidth < 938:
        return 2;
      case window.innerWidth < 1235:
        return 3;
      case window.innerWidth < 1600:
        return 4;
      default:
        return 2;
    }
  }

  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider />
        <div className="home__products">
          <ProductRow index={0} rowLength={rowLength} />
          <ProductRow index={1} rowLength={rowLength} />
          <FullWidthBanner data={bannersArray[0]} />
          <ProductRow index={2} rowLength={rowLength} />
          <FullWidthBanner data={bannersArray[1]} />
          <FullWidthBanner data={bannersArray[2]} />
          <ProductRow index={3} rowLength={rowLength} />
        </div>
      </div>
    </div>
  );
}

export default Home;
