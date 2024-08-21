import React, { useState } from "react";
import UserForm from "../Component/UserForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  const [userDataPost, setUserDataPost] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  //   console.log(userDataPost);
  const handlePostData = async () => {
    await axios
      .post("http://localhost:1226/users", userDataPost)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <UserForm
        setData={setUserDataPost}
        data={userDataPost}
        func={handlePostData}
        heading={"Create User"}
        btnText={"Create"}
        del={false}
      />
    </>
  );
};

export default NewUser;
