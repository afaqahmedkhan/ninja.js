import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch, placeholder }) => {
  return (
    <input
      type="search"
      className="form-control"
      placeholder={placeholder || "Søg brugere"}
      onChange={onSearch}
    />
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
