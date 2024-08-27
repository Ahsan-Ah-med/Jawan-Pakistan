import React, { useEffect, useState } from "react";
import "./Todo.css";
import loader from "../assets/loader.svg";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { database } from "../../config/Firebass";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Todo() {
  const [listText, setListText] = useState({ value: "" });
  const [listItem, setListItem] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [liveData, setLiveData] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // add data in database
  const addlist = async () => {
    if (listText.value == "") {
      setIsOpen(true);
    } else {
      setIsLoader(true);
      try {
        const docRef = await addDoc(collection(database, "todoList"), {
          todoValue: listText,
        });
        setLiveData(!liveData);
        setTimeout(() => {
          setIsLoader(false);
        }, 300);
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setListText({ value: "" });
    }
  };
  // get data on database
  const getData = async () => {
    setIsLoader(true);
    const dataArray = [];
    const fetchDb = await getDocs(collection(database, "todoList"));
    fetchDb.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      dataArray.push({ ...doc.data(), id: doc.id });
    });
    setListItem(dataArray);
    setTimeout(() => {
      setIsLoader(false);
    }, 300);
    // console.log(dataArray);
  };
  // delete data on database
  const deleted = async (id) => {
    await deleteDoc(doc(database, "todoList", id));
    setLiveData(!liveData);
  };
  // editing active
  const edit = (index) => {
    setIsEditing(index);
    setEditedText(listItem[index].todoValue.value);
  };
  // update value on database
  const updateItem = async (index, id) => {
    const { id: _, ...updatedItem } = {
      ...listItem[index],
      todoValue: { value: editedText },
    };
    await updateDoc(doc(database, "todoList", id), updatedItem);
    // console.log(updatedItem);
    setIsEditing(null);
    setEditedText("");
    setLiveData(!liveData);
  };

  useEffect(() => {
    getData();
  }, [liveData]);
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => {
          setIsOpen(false);
        }}
        action={action}
        message="Field Not be Empty!!!"
      />
      <div className="container">
        <div className="todo-app">
          <div className="app-title">
            <h2>To-do app</h2>
          </div>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="add your tasks"
              value={listText.value}
              onChange={(e) => {
                setListText({ value: e.target.value });
              }}
            />
            <button onClick={addlist}>
              {isLoader ? (
                <img src={loader} style={{ width: "24px" }} />
              ) : (
                "Add"
              )}
            </button>
          </div>
          <ul id="list-container">
            {listItem.map((e, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "50px",
                    cursor: "pointer",
                  }}
                >
                  {isEditing === i ? (
                    <input
                      value={editedText}
                      type={"text"}
                      onChange={(e) => setEditedText(e.target.value)}
                      style={{ borderBottom: "1px solid #ff5945" }}
                    />
                  ) : (
                    <>
                      <li>{e.todoValue.value}</li>
                    </>
                  )}
                  <div className="todoToggleBtn">
                    {isEditing === i ? (
                      <button onClick={() => updateItem(i, e.id)} id="edit">
                        Update
                      </button>
                    ) : (
                      <>
                        <FaRegEdit onClick={() => edit(i)} />
                        <MdDeleteForever onClick={() => deleted(e.id)} />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
