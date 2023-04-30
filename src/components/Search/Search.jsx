import React from "react";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <input
        type="search"
        className={classes.search}
        name="search"
        id="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
