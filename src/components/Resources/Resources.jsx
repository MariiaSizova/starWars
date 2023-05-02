import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Resources.module.css";
import Search from "../Search/Search";
import Table from "../Table/Table";
import Addform from "../AddForm/Addform";

const Resources = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const getData = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4001/data", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (query) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className={classes.resourcesPage}>
      <div className={classes.resourcesLine}>
        <h1 className={classes.resourcesTitle}>Resources</h1>
        <div className={classes.buttons}>
          <button className={classes.actionBtn}>Action</button>
          <button className={classes.addBtn} onClick={handleClick}>
            Add resources
          </button>
        </div>
      </div>
      <div className={classes.secondLine}>
        <div className={classes.resourceNavBar}>
          <nav className={classes.resourceNav}>
            <ul className={classes.resourceUl}>
              <li className={classes.resourceLi}>
                <NavLink className={classes.page} to="/resources/people">
                  People
                </NavLink>
              </li>
              <li className={classes.resourceLi}>
                <NavLink className={classes.page} to="/resources/starships">
                  Starships
                </NavLink>
              </li>
              <li className={classes.resourceLi}>
                <NavLink className={classes.page} to="/resources/planets">
                  Planets
                </NavLink>
              </li>
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
      <Addform isVisible={isVisible} />
    </div>
  );
};

export default Resources;
