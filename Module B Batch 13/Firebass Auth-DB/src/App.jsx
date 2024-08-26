import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Screens/Home";
import NewUser from "./Screens/NewUser";
import Edit from "./Screens/Edit";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebass";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        setLoginStatus(true);
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        setLoginStatus(false);
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
