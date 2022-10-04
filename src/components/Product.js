import React from "react";
import "../assets/styles/Product.css";

function Product({ data: { title, image, cta } }) {
  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <img src={image} alt={title} />
      <a className="product__ctaButton">{cta}</a>
    </div>
  );
}

export default Product;
