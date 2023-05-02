import React, { useState, useEffect } from "react";
import classes from "./Table.module.css";
import forwardLogo from "../../images/chevron_right_black_24dp.svg";
import backLogo from "../../images/chevron_left_black_24dp.svg";
import firstPageLogo from "../../images/first_page_black_24dp.svg";
import lastPageLogo from "../../images/last_page_black_24dp.svg";
import sortedLogo from "../../images/icon.svg";

const Table = ({ data }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tableData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Height", accessor: "height" },
    { label: "Weight", accessor: "weight" },
    { label: "Starship", accessor: "starship" },
    { label: "Created", accessor: "created" },
  ];

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    console.log(sortOrder);
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null && b[sortField] !== null) return 1;
        if (a[sortField] !== null && b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField]
            .toString()
            .localeCompare(b[sortField].toString(), "en", { numeric: true }) *
          (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.columnSml}></th>
            {columns.map(({ label, accessor }) => {
              return (
                <th
                  className={classes.columnFix}
                  key={accessor}
                  onClick={() => handleSortingChange(accessor)}
                >
                  {label}
                  {sortField === accessor && (
                    <img
                      src={sortedLogo}
                      alt="Logo for sorting"
                      className={`${classes.sortLogo} ${
                        order === "asc"
                          ? classes.sortAsc
                          : order === "desc"
                          ? classes.sortDesc
                          : ""
                      }`}
                    />
                  )}
                </th>
              );
            })}
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
          {startIndex + 1}-{endIndex} of {tableData.length}
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
          onClick={handleLastPage}
        >
          <img className={classes.btnLogo} src={lastPageLogo} alt="Last page" />
        </button>
      </div>
    </div>
  );
};

export default Table;
