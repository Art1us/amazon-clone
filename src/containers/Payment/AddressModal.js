import React, { useCallback, useRef, useState } from "react";
import "../../assets/styles/AddressModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useStateValue } from "../../context/StateProvider";
import { nanoid } from "nanoid";
import addressFormInputs from "../../data/addressFormInputs";
import AddressInput from "./AddressInput";

function AddressModal({ setShowAddressModal, initialAddress }) {
  const [newAddress, setNewAddress] = useState(initialAddress);
  const [{}, dispatch] = useStateValue();

  const updatedFormErrors = {
    country: true,
    name: true,
    phone: true,
    city: true,
    zip: true,
  };

  const [formErrors, setFormErrors] = useState(updatedFormErrors);

  function submitHandler() {
    addressFormInputs.forEach((item) => {
      if (new RegExp(item.pattern).test(newAddress[item.name])) {
        updatedFormErrors[item.name] = false;
      }
    });
    setFormErrors(updatedFormErrors);
    if (Object.values(formErrors).every((item) => item === false)) {
      console.log(formErrors);
      addNewAddress();
    }
  }

  function addNewAddress() {
    if (newAddress.id === "") {
      setNewAddress((prev) => {
        Object.assign(prev, { id: nanoid() });
        return {
          ...prev,
        };
      });

      dispatch({
        type: "ADD_NEW_ADDRESS",
        address: newAddress,
      });
    } else {
      dispatch({
        type: "EDIT_ADDRESS",
        address: newAddress,
      });
    }

    dispatch({
      type: "SET_CHOSEN_ADDRESS",
      chosenAddress: { id: newAddress.id },
    });
    setShowAddressModal(false);
  }

  return (
    <div className="addressModal">
      <div className="addressModal__header">
        <h4>Enter a new shipping address</h4>
        <CloseIcon
          className="addressModal__closeIcon"
          onClick={() => setShowAddressModal(false)}
        />
      </div>
      <div className="addressModal__main">
        <h2>Add a new address</h2>

        <form
          action="submit"
          className="addressModal__mainForm"
          onSubmit={submitHandler}
        >
          {addressFormInputs.map(
            (item) =>
              item.id <= 5 && (
                <AddressInput
                  key={item.id}
                  {...item}
                  displayError={formErrors[item.name]}
                  value={newAddress[item.name]}
                  onChange={(e) =>
                    setNewAddress({
                      ...newAddress,
                      [item.name]: e.target.value,
                    })
                  }
                />
              )
          )}
          <div className="adressModal__bottomAddress">
            {addressFormInputs.map(
              (item) =>
                item.id > 5 && (
                  <div className={`addressModal__bottomAddress--${item.name}`}>
                    <AddressInput
                      key={item.id}
                      {...item}
                      displayError={formErrors[item.name]}
                      value={newAddress[item.name]}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          [item.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                )
            )}
          </div>
        </form>
      </div>
      <div className="addressModal__footer">
        <button className="shippingAddress__button" onClick={submitHandler}>
          Use this address
        </button>
      </div>
    </div>
  );
}

export default AddressModal;
