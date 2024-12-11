import React from "react";
import styles from "./index.module.scss";

const CheckBox = ({ label, checked, onChange }) => {
  const id = `checkbox-${label}`; // Generate a unique ID for the checkbox

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={id} // Link input and label via ID
        className={styles.inputCheckbox}
        checked={checked}
        onChange={() => onChange(label)} // Pass the label directly
      />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.box}>
          <svg className={styles.checkmark} width="12px" height="10px">
            <use href="#check-mark"></use>
          </svg>
        </span>
        <span className={styles.text}>{label}</span>
      </label>
      <svg className={styles.inlineSvg} style={{ display: "none" }}>
        <symbol id="check-mark" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default CheckBox;
