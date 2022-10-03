import React from "react";
import "../assets/styles/Product.css";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, image, price, rating,cta }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <img src={image} alt={title} />
      <a className="product__ctaButton">{cta}</a>
    </div>
  );
}

export default Product;

{
  /* <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div> */
}
