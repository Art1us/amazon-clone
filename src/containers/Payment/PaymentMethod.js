import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { getBasketTotal } from "../../context/reducer";

function PaymentMethod() {
  const [{ basket, user }, dispatch] = useStateValue();
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
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
  );
}

export default PaymentMethod;
