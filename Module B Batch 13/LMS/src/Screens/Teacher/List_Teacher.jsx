import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";
import Button from "../../Components/Button/Button";

const List_Teacher = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [stateUpdate, setStateUpdate] = useState(false);
  useEffect(() => {
    getData();
  }, [stateUpdate]);
  const getData = async () => {
    const fetchData = [];
    const querySnapshot = await getDocs(collection(db, "teachers"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      fetchData.push({ ...doc.data(), id: doc.id });
    });
    setData(fetchData);
  };
  // console.log(data);
  const [loading, setLoading] = useState(false);
  const handleclick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard/teachers_registration");
    }, 500);
  };
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "teachers", id));
      toast("Successfully Deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setStateUpdate(!stateUpdate);
      setLoading(false);
    } catch (error) {
      toast(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setStateUpdate(!stateUpdate);
      setLoading(false);
    }
  };
  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <div className="p-5 sm:p-10 sm:container[300px] container mx-auto ">
      <div className="bg-[#2b2738] p-5 my-5 rounded-[10px] sm:p-20">
        <div className="heading">
          <h1 className="text-[#fff] text-2xl text-center mb-10">
            Teachers List
          </h1>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">Users</h2>
            <Button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-fit"
              onClick={handleclick}
              label={"add"}
              loader={loading}
            />
          </div>
          <p className="text-gray-400 mb-6">
            A list of all the Users in your account including their name, email,
            and etc.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-white rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    First Name
                  </th>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    Last Name
                  </th>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    Email
                  </th>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    Class
                  </th>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    Gender
                  </th>
                  <th className="py-2 px-4 text-left font-medium text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 px-4">{user.firstName}</td>
                    <td className="py-3 px-4">{user.lastName}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.class}</td>
                    <td className="py-3 px-4">{user.gender}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        className="text-indigo-500 hover:underline"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                      <button
                        className="text-indigo-500 hover:underline"
                        onClick={() => handleDelete(user.id)}
                      >
                        /Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List_Teacher;
