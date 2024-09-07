import React from "react";
import styles from "./Button.module.css";

const Button = ({
  label,
  onClick,
  type = "",
  id,
  style,
  className = "",
  loader,
  disabled,
}) => {
  return (
    <>
      {loader ? (
        <button
          onClick={onClick}
          type={type}
          id={id}
          className={`${styles.button} ${className}`}
          style={style}
          disabled={disabled}
        >
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        </button>
      ) : (
        <button
          onClick={onClick}
          type={type}
          id={id}
          className={`${styles.button} ${className}`}
          style={style}
          disabled={disabled}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
