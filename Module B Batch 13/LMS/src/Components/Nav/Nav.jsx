import React, { useState } from "react";
import styles from "./Nav.module.css";
import { RiMenuFold2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/Firebase";

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.overlay}
          onClick={() => setOpenDrawer(!openDrawer)}
          style={openDrawer ? { display: "block" } : { display: "none" }}
        ></div>
        <div
          className={styles.sideBar}
          style={
            openDrawer
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(-100%)" }
          }
        >
          <div className={styles.close}>
            <CgCloseO onClick={() => setOpenDrawer(!openDrawer)} />
          </div>
          <div className={styles.sideCont}>
            <ul className={styles.parentList}>
              <li>
                Students
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"student_registration"}
                    >
                      Student Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"student_list"}
                    >
                      Student List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Teachers
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"teachers_registration"}
                    >
                      Teachers Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"teachers_list"}
                    >
                      Teachers List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Subjects Teachers
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"subjects_add"}
                    >
                      Subjects Add
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"subjects_list"}
                    >
                      Subject List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Syllabus
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"syllabus_form"}
                    >
                      Syllabus Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"syllabus_list"}
                    >
                      Syllabus List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Schools
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"student_registration"}
                    >
                      Student Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"teachers_registration"}
                    >
                      Teacher Registration
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Classes
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"class_form"}
                    >
                      Class Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"class_list"}
                    >
                      Class List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Fees
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"fees_structure"}
                    >
                      Fees Structure
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"fees_voucher"}
                    >
                      Fees Voucher
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"fees_submission"}
                    >
                      Fees Submission
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Admissions
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"admission_form"}
                    >
                      Admission Form
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Exam
                <ul className={styles.childList}>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"exam_schedule"}
                    >
                      Exam Schedule
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setOpenDrawer(false)}
                      to={"exam_result"}
                    >
                      Exam Result
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.left}>
            <div className={styles.openMenu}>
              <RiMenuFold2Fill onClick={() => setOpenDrawer(!openDrawer)} />
            </div>
            <div className={styles.logo} onClick={() => navigate("/dashboard")}>
              <img src={logo} />
            </div>
          </div>
          <div className={styles.profile}>
            <CgProfile />
            <div className={styles.logout}>
              <Button label={"Logout"} onClick={handleLogout} id={"logout"} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
