import React from "react";
import AddButtons from "./AddButtons";
import { PropTypes } from "prop-types";

export default function AddTodo({ setTodo, setShow, postData }) {
  return (
    <div className="rectangle-3">
      <h4 className="addtodo">Add Todo</h4>
      <textarea
        className="form-control"
        cols="30"
        rows="8"
        style={{ resize: "none" }}
        required={true}
        onChange={(e) => setTodo(e.target.value)}
      ></textarea>
      <div className="two-buttons">
        <AddButtons text="Cancel" handler={() => setShow(false)} />
        <AddButtons text="Done" handler={() => postData()} />
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  setTodo: PropTypes.func,
  setShow: PropTypes.func,
  postData: PropTypes.func,
};
