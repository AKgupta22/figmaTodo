import React from "react";
import Button from "../Generic/Button";
import { PropTypes } from "prop-types";
import EditTodoForm from "./EditTodoForm";
export default function TodoItems({
  item,
  i,
  editable,
  marked,
  editTodo,
  setEditable,
  setEditvalue,
  deleteTodo,
}) {
  return (
    <div className="title-items">
      <div className="inner-titile-items">
        <div className="unmasked" onClick={() => marked(i)}>
          {item.status === "done" ? <i className="fa-solid fa-check"></i> : ""}
        </div>
        <EditTodoForm
          editable={editable}
          i={i}
          editTodo={editTodo}
          item={item}
          setEditvalue={setEditvalue}
        />
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-sharp fa-solid fa-trash"></i>}
          handler={() => deleteTodo(i)}
        />
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-solid fa-pen"></i>}
          handler={() => setEditable(i)}
        />
        <div
          className="list"
          style={{
            background: item.status === "done" ? "#61DEA4" : "",
          }}
        ></div>
      </div>
      <div className="rectangle1"></div>
    </div>
  );
}

TodoItems.propTypes = {
  editable: PropTypes.number,
  item: PropTypes.object,
  i: PropTypes.number,
  editTodo: PropTypes.func,
  setEditable: PropTypes.func,
  marked: PropTypes.func,
  deleteTodo: PropTypes.func,
  setEditvalue: PropTypes.func,
};
