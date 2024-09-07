import React, { useEffect, useState } from "react";
import UserTable from "../../Components/Table/Tables";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";

const List_Students = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [stateUpdate, setStateUpdate] = useState(false);
  useEffect(() => {
    getData();
  }, [stateUpdate]);
  const getData = async () => {
    const fetchData = [];
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      fetchData.push({ ...doc.data(), id: doc.id });
    });
    setData(fetchData);
  };
  // console.log(data);

  return (
    <div className="p-5 sm:p-10 sm:container[300px] container mx-auto ">
      <div className="bg-[#2b2738] p-5 my-5 rounded-[10px] sm:p-20">
        <div className="heading">
          <h1 className="text-[#fff] text-2xl text-center mb-10">
            Students List
          </h1>
        </div>
        <UserTable data={data} addBtn={()=>navigate('/dashboard/student_registration')} stup={()=>setStateUpdate(!stateUpdate)}/>
      </div>
    </div>
  );
};

export default List_Students;
