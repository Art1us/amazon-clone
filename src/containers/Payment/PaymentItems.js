import React from "react";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";

function PaymentItems() {
  const [{ basket }] = useStateValue();
  return (
    <div className="payment__items">
      {basket.length
        ? basket.map((item) => (
            <CheckoutProduct
              key={item.id + Math.floor(Math.random() * 100000)}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))
        : "Your basket is empty"}
    </div>
  );
}

export default PaymentItems;
