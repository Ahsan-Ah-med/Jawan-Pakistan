import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./Screens/Register/Login";
import Signup from "./Screens/Register/Signup";
import "./app.css";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Aos from "aos";
import "aos/dist/aos.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/Firebase";
import Nav from "./Components/Nav/Nav";
import List_Students from "./Screens/Students/List_Students";
import Added_Students from "./Screens/Students/Added_Students";
import Added_Teacher from "./Screens/Teacher/Added_Teacher";
import List_Teacher from "./Screens/Teacher/List_Teacher";
import Added_Subjects from "./Screens/Subjects/Added_Subjects";
import List_Subjects from "./Screens/Subjects/List_Subjects";
import Syllabus_Form from "./Screens/Syllabus/Syllabus_Form";
import Syllabus_List from "./Screens/Syllabus/Syllabus_List";
import Schools_Registration from "./Screens/Schools/Schools_Registration";
import Class_Form from "./Screens/Classes/Class_Form";
import Class_List from "./Screens/Classes/Class_List";
import Fee_Structure from "./Screens/Fees/Fee_Structure";
import Fee_Voucher from "./Screens/Fees/Fee_Voucher";
import Fee_Submission from "./Screens/Fees/Fee_Submission";
import Admission from "./Screens/Admission/Admission";
import Exam_Schedule from "./Screens/Exam/Exam_Schedule";
import Exam_Result from "./Screens/Exam/Exam_Result";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    Aos.init();
    isLogin();
  }, []);

  const isLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        if (location.pathname === "/" || location.pathname === "/register") {
          console.log(uid);
          navigate("/dashboard");
        }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Nav />}>
          <Route index element={<List_Students />} />
          <Route path="student_registration" element={<Added_Students />} />
          <Route path="student_list" element={<List_Students />} />
          <Route path="teachers_registration" element={<Added_Teacher />} />
          <Route path="teachers_list" element={<List_Teacher />} />
          <Route path="subjects_add" element={<Added_Subjects />} />
          <Route path="subjects_list" element={<List_Subjects />} />
          <Route path="syllabus_form" element={<Syllabus_Form />} />
          <Route path="syllabus_list" element={<Syllabus_List />} />
          <Route
            path="schools_registration"
            element={<Schools_Registration />}
          />
          <Route path="class_form" element={<Class_Form />} />
          <Route path="class_list" element={<Class_List />} />
          <Route path="fees_structure" element={<Fee_Structure />} />
          <Route path="fees_voucher" element={<Fee_Voucher />} />
          <Route path="fees_submission" element={<Fee_Submission />} />
          <Route path="admission_form" element={<Admission />} />
          <Route path="exam_schedule" element={<Exam_Schedule />} />
          <Route path="exam_result" element={<Exam_Result />} />
        </Route>
        <Route path="/abc" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
