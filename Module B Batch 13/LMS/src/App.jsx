import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./Screens/Register/Login";
import Signup from "./Screens/Register/Signup";
import "./app.css";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Aos from "aos";
import "aos/dist/aos.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/Firebase";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    Aos.init();
    isLogin();
  }, []);

  const isLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        if (location.pathname === "/" || location.pathname === "/register") {
          console.log(uid);
          navigate("/dashboard");
        }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/abc" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
