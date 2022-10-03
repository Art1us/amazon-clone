import React from "react";

function AddressInput(props) {
  const { label, onChange, id, errorMessage, displayError, ...inputProps } = props;

  return (
    <div className="addressInput">
      <h5>{label}</h5>
      <input {...inputProps} onChange={onChange} />
      <span style={{ display: `${displayError ? "block" : "none"}` }}>
        {errorMessage}
      </span>
    </div>
  );
}

export default AddressInput;
