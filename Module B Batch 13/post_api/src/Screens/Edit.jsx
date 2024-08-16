import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../Component/UserForm";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:1226/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(editData);
  const handlePostData = async () => {
    await axios
      .put(`http://localhost:1226/users/${id}`, editData)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  const deleteUser = async () => {
    await axios.delete(`http://localhost:1226/users/${id}`);
    navigate("/");
  };
  return (
    <>
      <div>Edit</div>
      <UserForm
        data={editData}
        func={handlePostData}
        setData={setEditData}
        heading={"Edit User Data"}
        btnText={"Update"}
        del={true}
        delFunc={deleteUser}
      />
    </>
  );
};

export default Edit;
