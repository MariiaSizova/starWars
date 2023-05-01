import React, { useState } from "react";
import classes from "./Resources.module.css";
import Search from "../Search/Search";
import Table from "../Table/Table";
import { data } from "../../services/data.js";

const Resources = () => {
  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (query) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div className={classes.resourcesPage}>
      <div className={classes.resourcesLine}>
        <h1 className={classes.resourcesTitle}>Resources</h1>
        <div className={classes.buttons}>
          <button className={classes.actionBtn}>Action</button>
          <button className={classes.addBtn}>Add resources</button>
        </div>
      </div>
      <div className={classes.secondLine}>
        <div className={classes.resourceNavBar}>
          <nav className={classes.resourceNav}>
            <ul className={classes.resourceUl}>
              <li className={classes.resourceLi}>Peope </li>
              <li className={classes.resourceLi}>Starships</li>
              <li className={classes.resourceLi}>Planets</li>
            </ul>
          </nav>
        </div>
        <div className={classes.searchBar}>
          <Search handleSearch={handleSearch} />
        </div>
      </div>
      <div className={classes.table}>
        <Table data={filteredData.length > 0 ? filteredData : data} />
      </div>
    </div>
  );
};

export default Resources;
