import React from "react";
import "../assets/styles/Product.css";



function FullWidthBanner({data}) {
  const {images, title} = data
  return (
    <div className="product fullWidthBanner">
      <h3 className="fullWidthBanner__title">{title}</h3>
      <div className="fullWidthBanner__container">
        {images.map((img) => {
          return <img src={img.image} alt="" />;
        })}
      </div>
    </div>
  );
}

export default FullWidthBanner;
