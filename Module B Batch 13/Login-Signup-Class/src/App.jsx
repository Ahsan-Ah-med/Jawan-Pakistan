import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login";
import loginImage from "./assets/login.png";
import signupImage from "./assets/singup.avif";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const toggle = () => {
    setisLoggedIn(!isLoggedIn);
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
        />
      )}
    </>
  );
}

export default App;
