import React, { useEffect, useState } from "react";
import PlusIcon from "../asset/images/icon_plus.svg";
import useHandler from "../Hooks";
import AddTodo from "./Generic/AddTodo";
import TodoItems from "./Generic/TodoItems";

export default function Home() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const { form, add } = useHandler(todo, data);
  const [editable, setEditable] = useState(-1);
  const [editvalue, setEditvalue] = useState("");
  const dependency = localStorage.getItem("todo");

  useEffect(() => {
    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    setData(JSON.parse(localStorage.getItem("todo")));
  }, [dependency]);

  const postData = () => {
    const Regex = new RegExp("[a-zA-Z0-9]{1,}");
    if (Regex.test(todo) === true) {
      if (editable !== -1) {
        editTodo(editable);
      }
      add();
      setData([...form]);
      setTodo("");
      setShow(false);
    }
  };

  const marked = (i) => {
    let newtodo = [...data];
    newtodo[i].status = newtodo[i].status === "done" ? "pending" : "done";
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
  };

  const editTodo = (i) => {
    let newtodo = [...data];
    newtodo[i].task = editvalue === "" ? newtodo[i].task : editvalue;
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
    setEditable(-1);
  };

  const deleteTodo = (i) => {
    let newtodo = [...data];
    newtodo = newtodo.filter((todo, index) => index !== i);
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
  };

  return (
    <div className="main-home">
      <div className="inner-home">
        <div className="today-head">Today</div>
        <div className="more-icon">
          <img src={PlusIcon} alt="+" onClick={() => setShow(true)} />
        </div>
      </div>
      <div className="item-container">
        {data?.map((item, i) => {
          return (
            <TodoItems
              key={i}
              item={item}
              i={i}
              editable={editable}
              marked={marked}
              editTodo={editTodo}
              setEditable={setEditable}
              setEditvalue={setEditvalue}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
      <div className="home-indicator"></div>
      {show === true ? (
        <div>
          <AddTodo setTodo={setTodo} setShow={setShow} postData={postData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
