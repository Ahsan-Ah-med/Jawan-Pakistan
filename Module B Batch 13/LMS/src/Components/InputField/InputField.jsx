import React, { useState } from "react";
import styles from "./InputFields.module.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const InputField = ({
  label = "text",
  type = "text",
  value,
  onChange = (e) => console.log(e.target.value),
  placeholder,
  requireds = false,
  id,
  style,
  className = "",
  name,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div
      className={`${styles.input_wrapper} ${
        type === "radio" ? "flex flex-nowrap gap-2" : ""
      }`}
      style={style}
    >
      <label htmlFor={id} className={type === "radio" ? "w-fit" : ""}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        required={requireds}
        type={type === "password" ? (showPass ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        className={`${className} ${type === "radio" ? "w-fit" : ""}`}
        name={name}
        checked={type === "radio" && value ? value === id : undefined} // Only apply `checked` for radio inputs
      />
      {type === "password" && (
        <>
          {!showPass ? (
            <FaEyeSlash onClick={() => setShowPass(true)} />
          ) : (
            <FaEye onClick={() => setShowPass(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default InputField;
