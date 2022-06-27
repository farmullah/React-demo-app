import React from "react";
import "./styles.css";

const SelectInputElement = ({
  label,
  name,
  id,
  value,
  error,
  handleChange,
  options = [],
  defaultOptionText = "Select",
}) => {
  return (
    <div className="selectinputelement">
      <label htmlFor={id}>{label}</label>
      <div className="input_container">
        <select
          name={name}
          id={name}
          className="input"
          value={value}
          onChange={handleChange}
        >
          <option value="">
            -: {[null, undefined, ""].includes(value) && defaultOptionText} :-
          </option>
          {options.map((o, i) => {
            return <option key={0 + i}>{o}</option>;
          })}
        </select>
        {error && error !== "" && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default SelectInputElement;
