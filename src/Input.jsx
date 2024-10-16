import React, { useState } from "react";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === "") setIsFocused(false);
  };
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required
      />
      <label className={`placeholder ${isFocused || value ? "active" : ""}`}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;