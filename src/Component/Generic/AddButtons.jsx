import React from "react";
import { PropTypes } from "prop-types";

export default function AddButtons({ text, handler }) {
  return (
    <div className={text === "Cancel" ? "label1" : "label2"} onClick={handler}>
      {text}
    </div>
  );
}

AddButtons.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func
};
