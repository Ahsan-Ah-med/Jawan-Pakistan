import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login";
import loginImage from "./assets/login.png";
import signupImage from "./assets/singup.avif";
import firebaseappNew from "./Firebase/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const auth = getAuth(firebaseappNew);
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const toggle = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const login = (
    event,
    userAuthName,
    userAuthPass,
    userAuthEmail,
    userAuthConPass
  ) => {
    event.preventDefault();
    // console.log(userAuthEmail, userAuthPass);
    // signInWithEmailAndPassword(auth, userAuthEmail, userAuthPass)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //     console.log("login:", user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  const signup = (
    event,
    userAuthName,
    userAuthPass,
    userAuthEmail,
    userAuthConPass
  ) => {
    event.preventDefault();
    // console.log(userAuthName,userAuthEmail, userAuthPass, userAuthConPass);
  };

  return (
    <>
      {isLoggedIn ? (
        <Login
          title="Sign in"
          image={loginImage}
          bottomText="Create an account"
          main_btn="Sign in"
          agreementText="Remember me"
          socialLogin={true}
          userName={true}
          userEmail={false}
          userPass={true}
          userPassRe={false}
          imageDir={false}
          click={toggle}
          submitFunc={login}
        />
      ) : (
        <Login
          title="Sign up"
          image={signupImage}
          bottomText="I am already member"
          main_btn="Register"
          agreementText="I agree all statements in Terms of service"
          socialLogin={false}
          userName={true}
          userEmail={true}
          userPass={true}
          userPassRe={true}
          imageDir={true}
          click={toggle}
          submitFunc={signup}
        />
      )}
    </>
  );
}

export default App;
