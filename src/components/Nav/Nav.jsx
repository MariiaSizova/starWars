import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import logoDash from "../../images/dash.svg";
import logoMedia from "../../images/video_library.svg";
import logoPeople from "../../images/people_outline.svg";
import logoSettings from "../../images/1.svg";
import logoClosed from "../../images/arrow2.svg";

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className={classes.navBar}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <img
              src={logoDash}
              alt="Logo for dashboard"
              className={classes.navLogo}
            />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className={classes.li}>
            <img
              src={logoMedia}
              alt="Logo for movies"
              className={classes.navLogo}
            />
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className={`${classes.dropdownParent} ${classes.li}`}>
            <img
              src={logoPeople}
              alt="Logo for resources"
              className={classes.navLogo}
            />
            <NavLink to="/resources" onClick={toggleDropdown}>
              Resources
            </NavLink>
            <img
              src={logoClosed}
              className={`${classes.closedDropdown} ${
                dropdownVisible ? classes.openDropdown : ""
              }`}
              alt="Dropdown menu logo"
              onClick={toggleDropdown}
            />
          </li>
          <div
            className={`${classes.dropdownContainer} ${
              dropdownVisible ? classes.show : ""
            }`}
          >
            <nav className={classes.nav}>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  <NavLink to="/people">People</NavLink>
                </li>
                <li className={classes.li}>
                  <NavLink to="/starships">Starships</NavLink>
                </li>
                <li className={classes.li}>
                  <NavLink to="/planets">Planets</NavLink>
                </li>
              </ul>
            </nav>
            <hr className={classes.line} />
          </div>
          <li className={classes.li}>
            <img
              src={logoSettings}
              alt="Logo for settings"
              className={classes.navLogo}
            />
            <NavLink to="/settings">Settings</NavLink>
            <img
              src={logoClosed}
              className={classes.closedDropdown}
              alt="Dropdown menu logo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
