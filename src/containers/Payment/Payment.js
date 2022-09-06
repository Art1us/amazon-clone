import React, { useState } from "react";
import "../../assets/styles/Payment.css";
import { useStateValue } from "../../context/StateProvider";
import { Link } from "react-router-dom";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import PaymentItems from "./PaymentItems";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const [selectedTitle, setSelectedTitle] = useState(1);

 /*  function selectTitleHandler(titleNum) {
    setTimeout(()=>setSelectedTitle(titleNum), 1)
  } */

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section" onClick={() => setSelectedTitle(1)}>
          <div className="payment__title">
            <h3>1</h3>
            <h3>Choose a shipping address</h3>
          </div>
          {selectedTitle === 1 && (
            <ShippingAddress setSelectedTitle={setSelectedTitle} />
          )}
        </div>
        <div className="payment__section" onClick={() => setSelectedTitle(2)}>
          <div className="payment__title">
            <h3>2</h3>
            <h3>Payment Method</h3>
          </div>
          {console.log("rendered")}
          {selectedTitle === 2 && <PaymentMethod />}
        </div>
        <div className="payment__section" onClick={() => setSelectedTitle(3)}>
          <div className="payment__title">
            <h3>3</h3>
            <h3>Items and shipping</h3>
          </div>
          {selectedTitle === 3 && <PaymentItems />}
        </div>
      </div>
    </div>
  );
}

export default Payment;
