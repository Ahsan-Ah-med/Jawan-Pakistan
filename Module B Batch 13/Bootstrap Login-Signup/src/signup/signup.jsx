import React from "react";
import styles from "./signup.module.css";
import Button from "react-bootstrap/Button";

const Signup = ({ clickFunc }) => {
  return (
    <div className="container-fluid mt-5 d-flex justify-content-center ">
      <div className={styles.boss}>
        <h1 className="mt-1 mb-5">Sign-Up</h1>

        <div className="mb-2">
          <label className="fs-3 mb-1" for="username">
            Name:
          </label>
          <br />
          <input
            placeholder="Enter Name"
            className="w-75 p-2"
            type="text"
            id="pu"
            name="username"
            required
          />
        </div>
        <div className="mb-2 ">
          <label className="fs-3 mb-1" for="email">
            Email:
          </label>
          <br />
          <input
            placeholder="Enter Email "
            className="w-75 p-2"
            type="email"
            id="pu"
            name="email"
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
            id="pu"
            name="password"
            required
          />
        </div>
        <div>
          <div className="mb-2">
            <label className="fs-3 mb-1" for="password">
              Confirm Password:
            </label>
            <br />
            <input
              placeholder="Enter Confirm Password"
              className="w-75 p-2"
              type="password"
              id="pu"
              name="password"
              required
            />
          </div>
          <input className="mb-5" type="checkbox" /> <i>Remember Me</i>
        </div>
        <Button className="mb-2 p-2 w-50" variant="outline-secondary">
          Sign Up...
        </Button>
        <p className="mb-5">
          <a onClick={clickFunc} href="#">
            I am logged In !
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
