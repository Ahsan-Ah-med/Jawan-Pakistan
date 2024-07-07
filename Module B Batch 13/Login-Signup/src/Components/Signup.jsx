import React, { useState } from "react";
import "./Auth.css";
import firebaseapp from "../Firebase/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Signup = () => {
  const auth = getAuth(firebaseapp);
  const provider = new GoogleAuthProvider();
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const handleEmailChange = (event) => {
    setEmailVal(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassVal(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();
    // console.log(emailVal, passVal);
    createUserWithEmailAndPassword(auth, emailVal, passVal)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        // console.log(user);
        signInWithEmailAndPassword(auth, emailVal, passVal)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("login:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
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
        // ...
      });
  };
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={emailVal}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passVal}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="auth-button" onClick={register}>
          Signup
        </button>
      </form>
      <button className="auth-button" onClick={google}>
        Signup with google
      </button>
    </div>
  );
};

export default Signup;
