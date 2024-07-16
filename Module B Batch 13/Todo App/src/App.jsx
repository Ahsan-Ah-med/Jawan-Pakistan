import React, { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [listText, setListText] = useState({ value: "", type: "" });
  const [listItem, setListItem] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addlist = () => {
    setListItem([listText, ...listItem]);
    setListText({ value: "", type: "" });
  };

  const deleted = (index) => {
    const datas = listItem.filter((_, i) => index !== i);
    setListItem(datas);
  };

  const edit = (index) => {
    setIsEditing(index);
    setEditedText(listItem[index].value);
  };

  const updateItem = (index) => {
    const updatedItems = listItem.map((item, i) =>
      i === index ? { ...item, value: editedText } : item
    );
    console.log(updatedItems)
    setListItem(updatedItems);
    setIsEditing(null);
    setEditedText("");
  };
  return (
    <>
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
                setListText({ value: e.target.value, type: "text" });
              }}
            />
            <button onClick={addlist}>Add</button>
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
                      type={e.type}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                  ) : (
                    <li>{e.value}</li>
                  )}
                  <div>
                    {isEditing === i ? (
                      <button onClick={() => updateItem(i)} id="edit">Update</button>
                    ) : (
                      <>
                        <FaRegEdit onClick={() => edit(i)} />
                        <MdDeleteForever onClick={() => deleted(i)} />
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

export default App;
