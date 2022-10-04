import React from "react";
import "../assets/styles/Product.css";

function CombinedProduct({ data: { title, images, cta } }) {
  
  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <div className="combinedProduct__imagesContainer">
        
        {images.map((img) => {
          return (
            <div
              className={`combinedProduct__imageWrapper ${
                img.isFullWidth ? "full-width" : ""
              }`}
            >
              <img src={img.image} alt={img.title} />
              <p>{img.title}</p>
            </div>
          );
        })}
        
      </div>
      <a className="product__ctaButton">{cta}</a>
    </div>
  );
}

export default CombinedProduct;
