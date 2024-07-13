import React, { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [listText, setListText] = useState("");
  const [listItem, setListItem] = useState([]);

  const addlist = () => {
    setListItem([listText, ...listItem]);
    setListText("");
  };
  const deleted = (index) => {
    // console.log(index);
    const datas = listItem.filter((e, i) => {
      return index != i;
    });
    setListItem(datas);
  };
  const edit = (index) => {
    console.log(index)
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
              value={listText}
              onChange={(e) => {
                setListText(e.target.value);
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
                  <li>{e}</li>
                  <div>
                    <FaRegEdit onClick={() => edit(i)} />
                    <MdDeleteForever onClick={() => deleted(i)} />
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
