import React from "react";
import classes from "./Search.module.css";

const Search = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        className={classes.search}
        name="search"
        id="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
