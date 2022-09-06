import React, { useState } from "react";
import AddressModal from "./AddressModal";
import Modal from "react-modal";
import "../../assets/styles/ShippingAddress.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useStateValue } from "../../context/StateProvider";

function ShippingAddress({ selectTitleHandler }) {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [{ address, chosenAddress }, dispatch] = useStateValue();
  const [initialAddress, setInitialAddress] = useState({})
  

  const selectAddress = (id) => {
    dispatch({
      type: "SET_CHOSEN_ADDRESS",
      chosenAddress: { id: id },
    });
  };

  function editAddress(id) {
    console.log(`This is id ${id}`)
    setInitialAddress()
    setShowAddressModal(true);
  }

  Modal.setAppElement("#root");

  return (
    <div className="shippingAddress">
      <Modal
        isOpen={showAddressModal}
        onRequestClose={() => setShowAddressModal(false)}
        shouldCloseOnOverlayClick={false}
        className="shippingAddress__modal"
        overlayClassName="shippingAddress__modalOverlay"
      >
        <AddressModal
          setShowAddressModal={setShowAddressModal}
          editAddress={editAddress}
          initialAddress={initialAddress}
        />
      </Modal>
      <div className="shippingAddress__topSection">
        <div className="shippingAddress__title">
          <h3>Your address</h3>
          <h5>Shipping to more than one address?</h5>
        </div>
        <div className="shippingAddress__address">
          {address[0] &&
            address.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`shippingAddress__addressItem ${
                    item.id === chosenAddress.id && "addressChecked"
                  }`}
                >
                  {item.id === chosenAddress.id ? (
                    <RadioButtonCheckedIcon className="shippingAddress__addressItem--radio" />
                  ) : (
                    <RadioButtonUncheckedIcon
                      onClick={() => selectAddress(item.id)}
                      className="shippingAddress__addressItem--radio"
                    />
                  )}
                  <p className="shippingAddress__addressItemText">
                    <strong>{item.name} </strong>
                    {item.addressStreet},{item.addressApp},{item.city},
                    {item.zip},{item.country}
                  </p>
                  <p
                    className="shippingAddress__addressEditButton"
                    onClick={()=>editAddress(item.id)}
                  >
                    Edit
                  </p>
                </div>
              );
            })}
          <div
            className="shippingAddress__address--add"
            onClick={() => setShowAddressModal(true)}
          >
            <AddOutlinedIcon className="shippingAddress__address--addIcon" />
            <p>Add new address</p>
          </div>
        </div>
      </div>
      <div className="shippingAddress__buttonContainer">
        <button
          className="shippingAddress__button"
          onClick={() => selectTitleHandler(2)}
        >
          Use this address
        </button>
      </div>
    </div>
  );
}

export default ShippingAddress;
