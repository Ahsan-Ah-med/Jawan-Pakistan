import React, { useState } from "react";
import styles from "./Styles.module.css";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import { auth } from "../../Config/Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import loginImage from "../../assets/login_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // console.log(login);
  const handelSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError(false);
        setErrorMsg("");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setError(true);
        setErrorMsg(errorMessage);
      });
  };
  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setError(false);
        setErrorMsg("");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(true);
        setErrorMsg(errorMessage);
        // ...
      });
  };
  const handleGithub = async (e) => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setError(false);
        setErrorMsg("");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        setError(true);
        setErrorMsg(errorMessage);
        // ...
      });
  };
  return (
    <>
      <Snackbar
        open={error}
        autoHideDuration={5000}
        // onClose={handleClose}
        message={errorMsg}
      />
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.image}>
          <img src={loginImage} />
        </div>
        <div className={styles.form}>
          <h1>Login</h1>
          <p className={styles.signup}>
            Don't have an account yet? <Link to={"/register"}>Sign Up</Link>
          </p>
          <form onSubmit={handelSubmit}>
            <InputField
              id={"email"}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              placeholder={"Enter Your Email"}
              value={login.email}
              label="Email"
              type="email"
              requireds={true}
            />
            <InputField
              id={"password"}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              placeholder={"Enter Your Password"}
              value={login.password}
              label="Password"
              type="password"
              requireds={true}
            />
            <Button label={"Login"} type="submit" />
          </form>
          <div className={styles.socialLogin}>
            <div className={styles.defhead}>
              <span></span>
              <p>Or Login With</p>
              <span></span>
            </div>
            <div className={styles.socialBtn}>
              <button onClick={handleGoogle}>
                <FcGoogle />
                Google
              </button>
              <button onClick={handleGithub}>
                <FaGithub />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
