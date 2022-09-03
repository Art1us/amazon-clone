import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const disableButton = true;
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const [succeeded, setSucceeded] = useState(false);
  const [processing,setProcessing] = useState('')

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          
          <div className="payment__details">
            <form onSubmit={formSubmitHandler}>
              <div className="payment__creditCardContainer">
                <CreditCardIcon />
                <input placeholder="Card number" type="text" />
                <input placeholder="MM/YY" type="text" />
                <input placeholder="CVC" type="text" />
              </div>

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className="payment__button"
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
