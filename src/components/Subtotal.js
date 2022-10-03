import React from "react";
import "../assets//styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  function proceedToCheckout() {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} items):
            <strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={proceedToCheckout}>
        Proceed to Checkout ({basket.length} items)
      </button>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
    </div>
  );
}

export default Subtotal;
