import React, { useState } from "react";
import PropTypes from "prop-types";

import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";

const DataTable = ({ data, rowsPerPage = 10 }) => {
  const [rows, setRows] = useState(data);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const calculateTotalPages = (dataRows) => {
    return Math.ceil(dataRows.length / rowsPerPage);
  };

  const [totalPages, setTotalPages] = useState(calculateTotalPages(data));

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = data;

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    setRows(rowsFound);
    setCurrentPageNumber(0);
    setTotalPages(calculateTotalPages(rowsFound));
  };

  const changePageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = rows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalPages={totalPages}
        onChange={changePageNumber}
      />
    </>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  rowsPerPage: PropTypes.number,
};

export default DataTable;
