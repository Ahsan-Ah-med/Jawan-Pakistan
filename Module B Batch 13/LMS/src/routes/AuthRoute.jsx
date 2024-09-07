import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../Config/Firebase";

const AuthRoute = () => {
  const [islogin, setIsLogin] = useState(false);
  useEffect(() => {
    isLogin();
  }, []);
  const isLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        // navigate("/dashboard");
        setIsLogin(true);
        // ...
      } else {
        // User is signed out
        setIsLogin(false);
        // ...
      }
    });
  };
  return !islogin ? <Outlet /> : <Navigate to={"/dashboard"} />;
};

export default AuthRoute;
