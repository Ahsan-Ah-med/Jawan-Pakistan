import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import NewUser from "./Screens/NewUser";
import Edit from "./Screens/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
