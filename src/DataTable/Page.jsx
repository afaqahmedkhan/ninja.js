import React from "react";
import PropTypes from "prop-types";

import Button from "../ReusableComponents/Button";
const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const renderedPageNumber = () => {
    return pageNumber + 1;
  };
  const onClick = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  const isActive = currentPageNumber === pageNumber;
  return (
    <li className="page-item mr-1">
      <Button
        isActive={isActive}
        onClick={onClick}
        content={renderedPageNumber()}
      />
    </li>
  );
};

Button.propTypes = {
  pageNumber: PropTypes.number,
  currentPageNumber: PropTypes.number,
  onChange: PropTypes.func,
};

export default Page;
