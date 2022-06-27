import React from "react";
import "./styles.css";

const InputElement = ({
  label,
  name,
  id,
  type = "text",
  value,
  placeholder,
  error,
  handleChange,
  inputType,
  options = [],
  defaultOptionText = "Select",
}) => {
  return (
    <div className="inputelement">
      <label htmlFor={id}>{label}</label>
      <div className="input_container">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {error && error !== "" && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default InputElement;
