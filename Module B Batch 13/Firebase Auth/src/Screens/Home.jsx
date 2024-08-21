import React, { useEffect, useState } from "react";
import UserTable from "../Component/UserTable";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1226/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

    // console.log(userData);
  return (
    <>
    <h1>CRUD OPEARATION APP</h1>
      <h1>User Data</h1>
      <Button
        variant="contained"
        color="success"
        sx={{ marginBottom: 5 }}
        onClick={() => {
          navigate("/newuser");
        }}
      >
        Create User
      </Button>
      <UserTable
        data={userData}
        setData={setUserData}
        heading={userData && userData.length > 0 && Object.keys(userData[0])}
      />
    </>
  );
};

export default Home;
