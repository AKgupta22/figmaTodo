import React from "react";
import { PropTypes } from "prop-types";

export default function EditTodoForm({
  editable,
  i,
  editTodo,
  item,
  setEditvalue,
}) {
  return (
    <>
      {editable !== i ? <div className="label">{item.task}</div> : ""}
      {editable === i ? (
        <form className="w-100" onSubmit={() => editTodo(i)}>
          <input
            type="text"
            className="form-control"
            defaultValue={item.task}
            required
            onChange={(e) => setEditvalue(e.target.value)}
          />
        </form>
      ) : (
        ""
      )}
    </>
  );
}

EditTodoForm.propTypes = {
  editable: PropTypes.number,
  i: PropTypes.number,
  editTodo: PropTypes.func,
  item: PropTypes.object,
  setEditvalue: PropTypes.func,
};
