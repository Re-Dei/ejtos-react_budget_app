import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState("GBP");

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    dispatch({
      type: "CHG_CURRENCY'",
      payload: event.target.value,
    });
  };

  return (
    <div className="input-group mb-3">
      <select
        className="custom-select"
        id="inputGroupSelect01"
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;