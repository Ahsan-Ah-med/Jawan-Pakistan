import React from "react";
import styles from "./login.module.css";
import Button from "react-bootstrap/Button";

const Login = ({ clickFunc }) => {
  return (
    <div className="container-fluid mt-5 d-flex justify-content-center ">
      <div className={styles.boss}>
        <h1 className="mt-5 mb-5">Login</h1>

        <div className="mb-2">
          <label className="fs-3 mb-1" for="username">
            Username:
          </label>
          <br />
          <input
            placeholder="Enter UserName"
            className="w-75 p-2"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-2">
          <label className="fs-3 mb-1" for="password">
            Password:
          </label>
          <br />
          <input
            placeholder="Enter Password"
            className="w-75 p-2"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div>
          <input className="mb-5" type="checkbox" /> <i>Remember Me</i>
        </div>
        <Button className="mb-5 p-2 w-50" variant="outline-secondary">
          Login...
        </Button>
        <p className="mb-5">
          <a onClick={clickFunc} href="#">
            Create an Account?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
