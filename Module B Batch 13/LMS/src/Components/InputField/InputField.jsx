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
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={styles.input_wrapper} style={style}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        required={requireds}
        type={type == "password" ? (showPass ? "text" : "password") : type}
        value={value}
        onChange={onChange} // Use correct prop name
      />
      {type == "password" && (
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
