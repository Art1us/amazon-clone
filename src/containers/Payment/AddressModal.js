import React, { useState } from "react";
import "../../assets/styles/AddressModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useStateValue } from "../../context/StateProvider";
import { nanoid } from "nanoid";

function AddressModal({ setShowAddressModal, initialAddress }) {
  const [newAddress, setNewAddress] = useState(initialAddress);
  const [{}, dispatch] = useStateValue();


    function submitHandler(){        
        addNewAddress()
    }


  function addNewAddress(){
    if (!newAddress.country) {
      return;
    }

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
    dispatch({
      type: "SET_CHOSEN_ADDRESS",
      chosenAddress: { id: newAddress.id },
    });
    setShowAddressModal(false);
  };

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
        <form className="addressModal__mainForm" onSubmit={submitHandler}>
          <h5>Country/Region</h5>
          <input
            type="text"
            value={newAddress.country}
            onChange={(e) =>
              setNewAddress({ ...newAddress, country: e.target.value })
            }
          />
          <h5>Full name (First and Last name)</h5>
          <input
            type="text"
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress({ ...newAddress, name: e.target.value })
            }
          />
          <h5>Phone number</h5>
          <input
            type="text"
            value={newAddress.phone}
            onChange={(e) =>
              setNewAddress({ ...newAddress, phone: e.target.value })
            }
          />
          <h5>Address</h5>
          <input
            type="text"
            value={newAddress.addressStreet}
            onChange={(e) =>
              setNewAddress({ ...newAddress, addressStreet: e.target.value })
            }
          />
          <input
            type="text"
            value={newAddress.addressApp}
            onChange={(e) =>
              setNewAddress({ ...newAddress, addressApp: e.target.value })
            }
          />

          <div className="adressModal__bottomAddress">
            <div className="addressModal__bottomAddress--city">
              <h5>City</h5>
              <input
                type="text"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
              />
            </div>
            <div className="addressModal__bottomAddress--state">
              <h5>State</h5>
              <input
                type="text"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
              />
            </div>
            <div className="addressModal__bottomAddress--zip">
              <h5>ZIP Code</h5>
              <input
                type="text"
                value={newAddress.zip}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zip: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
      <div className="addressModal__footer">
        <button
          className="shippingAddress__button"
          onClick={submitHandler}
        >
          Use this address
        </button>
      </div>
    </div>
  );
}

export default AddressModal;
