import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import userEvent from "@testing-library/user-event";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      <div className="checkout__greeting">
        <h3>Hello, {user ? user.email : "Guest"}</h3>
      </div>
      <div className="checkout__container">
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
        <div className="checkout__products">
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.length
            ? basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            : "Your basket is empty"}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
