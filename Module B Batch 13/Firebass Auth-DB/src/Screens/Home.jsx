import React, { useEffect, useState } from "react";
import Todo from "../Component/Todo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Firebass";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
      <Todo />
    </>
  );
};

export default Home;
