import React, { useState } from "react";
import classes from "./Table.module.css";
import forwardLogo from "../../images/chevron_right_black_24dp.svg";
import backLogo from "../../images/chevron_left_black_24dp.svg";
import firstPageLogo from "../../images/first_page_black_24dp.svg";
import lastPageLogo from "../../images/last_page_black_24dp.svg";
import { data } from "../../services/data.js";

const Table = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLasPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.columnSml}></th>
            <th className={classes.columnFix}>Name</th>
            <th className={classes.columnFix}>Height</th>
            <th className={classes.columnFix}>Weight</th>
            <th className={classes.columnFix}>Starship</th>
            <th className={classes.columnFix}>Created</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className={classes.columnSml}>
                <div className={classes.radioBtn}>
                  <input type="radio" className={classes.squareBtn} />
                </div>
              </td>
              <td className={classes.columnFix}>{item.name}</td>
              <td className={classes.columnFix}>{item.height}</td>
              <td className={classes.columnFix}>{item.weight}</td>
              <td className={classes.columnFix}>{item.starship}</td>
              <td className={classes.columnFix}>{item.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.pagination}>
        <span className={classes.numberOfRows}>
          {startIndex + 1}-{endIndex} of {data.length}
        </span>
        <button
          className={classes.btnPage}
          disabled={currentPage === 1}
          onClick={handleFirstPage}
        >
          <img
            className={classes.btnLogo}
            src={firstPageLogo}
            alt="Back to first page"
          />
        </button>
        <button
          className={classes.btnPage}
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <img className={classes.btnLogo} src={backLogo} alt="Back one page" />
        </button>
        <button
          className={classes.btnPage}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <img className={classes.btnLogo} src={forwardLogo} alt="Next page" />
        </button>
        <button
          className={classes.btnPage}
          disabled={currentPage === totalPages}
          onClick={handleLasPage}
        >
          <img className={classes.btnLogo} src={lastPageLogo} alt="Last page" />
        </button>
      </div>
    </div>
  );
};

export default Table;
