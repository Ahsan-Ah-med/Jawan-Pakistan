import React, { useState } from "react";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { Bounce, toast } from "react-toastify";

const Added_Students = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    class: 0,
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "students"), formData);
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
      toast("Register Successfully", {
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
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
      toast("Register unsuccessfully", {
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
    }
  };
  return (
    <div className="p-5 sm:p-10 sm:container[300px] container mx-auto ">
      <div className="bg-[#2b2738] p-5 my-5 rounded-[10px] sm:p-20">
        <div className="heading">
          <h1 className="text-[#fff] text-2xl text-center mb-10">
            Student Registration
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <InputField
              placeholder={"Enter Your first name"}
              id={"fname"}
              label="First Name*"
              requireds
              type="text"
              className="text-[#fff] px-2"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <InputField
              placeholder={"Enter Your last name"}
              id={"name"}
              label="Last Name*"
              requireds
              type="text"
              className="text-[#fff] px-2"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <InputField
              placeholder={"Enter Your email"}
              id={"email"}
              label="Email*"
              requireds
              type="email"
              className="text-[#fff] px-2"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <InputField
              placeholder={"Enter Your Class"}
              id={"email"}
              label="Class*"
              requireds
              type="number"
              className="text-[#fff] px-2"
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <InputField
              id={"female"}
              label="Female*"
              requireds
              type="radio"
              className="text-[#fff] px-2"
              name="gender"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.id })
              }
              value={formData.gender}
            />
          </div>
          <div className="mb-5">
            <InputField
              id={"male"}
              label="Male*"
              requireds
              type="radio"
              className="text-[#fff] px-2"
              name="gender"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.id })
              }
              value={formData.gender}
            />
          </div>
          <Button
            label={"Submit"}
            id={"addStudent"}
            type="submit"
            loader={loading}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Added_Students;
