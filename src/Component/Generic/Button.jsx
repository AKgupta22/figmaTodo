import React from "react";
import { PropTypes } from "prop-types";

const Button = (props) => {
  return (
    <button
      type="sumbit"
      className={`btn btn-primary ${props.names}`}
      onClick={props.handler}
    >
      {props.text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.element,
  names: PropTypes.string,
  handler: PropTypes.func,
};

export default Button;
