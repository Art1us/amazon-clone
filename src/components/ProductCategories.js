import React from "react";
import "../assets/styles/Product.css";

function ProductCategories({ data: { title, images, cta } }) {

  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <div className="productCategories__imagesContainer">

        {images.map((img) => {
          return (
            <div className={`productCategories__imageWrapper`}>
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

export default ProductCategories;
