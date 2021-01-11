import React from "react";
import PropTypes from "prop-types";

const Button = ({ isActive, onClick, content }) => {
  return (
    <button className={isActive ? "button-outline" : ""} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  content: PropTypes.any,
};

export default Button;
