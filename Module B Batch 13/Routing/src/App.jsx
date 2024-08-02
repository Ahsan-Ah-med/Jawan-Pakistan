import { useState } from 'react'
import Login from './screens/Login'
import "./App.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isLogSec, setIsLogSec] = useState(true);
  const toggle = () => {
    setisLoggedIn(!isLoggedIn);
  };
  // console.log(isLoggedIn)
  const [signinData, setSinginData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  console.log(signinData)
  return (
    <>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Login toggle={toggle} /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!isLoggedIn ? <Signup toggle={toggle} signData={setSinginData} signinDataVal={signinData} /> : <Navigate to="/" />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
      {/* <Login /> */}
    </>
  )
}

export default App
