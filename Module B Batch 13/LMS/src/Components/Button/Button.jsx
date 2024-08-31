import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, type = "", id, style }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      id={id}
      className={styles.button}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
