import React, { useState } from "react";
import Button from "../Button/Button";
import { db } from "../../Config/Firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";

const UserTable = ({ data, addBtn, stup }) => {
  const [loading, setLoading] = useState(false);
  const handleclick = () => {
    setLoading(true);
    setTimeout(() => {
      addBtn();
    }, 500);
  };
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "students", id));
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
      stup();
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
      stup();
      setLoading(false);
    }
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
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
        A list of all the Users in your account including their name, email, and
        etc.
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
  );
};

export default UserTable;
