import React, { useState } from "react";
import styles from "./index.module.scss";

const Select = ({ options = [], onChange, value, placeholder = "Filter" }) => {
  const handleSelect = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={(e) => handleSelect(e)}
        value={value}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
