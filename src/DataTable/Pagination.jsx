import React from "react";
import PropTypes from "prop-types";

import Page from "./Page";

const Pagination = ({ currentPageNumber, totalPages, onChange }) => {
  const pages = [];

  for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
    pages.push(
      <Page
        key={pageNumber}
        currentPageNumber={currentPageNumber}
        pageNumber={pageNumber}
        onChange={onChange}
      />
    );
  }

  return pages.length > 1 ? <ul className="pagination">{pages}</ul> : null;
};

Pagination.propTypes = {
  currentPageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pagination;
