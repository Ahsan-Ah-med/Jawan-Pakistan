import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseapp from "./Firebase/Firebase";

function App() {
  const auth = getAuth(firebaseapp);
  const [loginStatus, setLoginStatus] = useState(false);
  const [account, setAccount] = useState(false);
  // console.log(account);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user;
        // ...
        // console.log(uid);
        setLoginStatus(true);
      } else {
        // User is signed out
        // ...
        // console.log("logout");
        setLoginStatus(false);
      }
    });
  });
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAccount(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const createAcc = () => {
    setAccount(true);
  };
  const logAcc = () => {
    setAccount(false);
  };
  return (
    <>
      {loginStatus ? (
        <>
          <h1>User Login...</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Authenticate With FireBase</h1>
          {!account && (
            <>
              <Login />
              <button className="acc" onClick={createAcc}>
                Create Account
              </button>
            </>
          )}
          {account && (
            <>
              <Signup />
              <button className="acc" onClick={logAcc}>
                Login{" "}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
