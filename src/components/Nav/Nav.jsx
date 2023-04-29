import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import logoDash from "../../images/dash.svg";
import logoMedia from "../../images/video_library.svg";
import logoPeople from "../../images/people_outline.svg";
import logoSettings from "../../images/1.svg";
import logoClosed from "../../images/arrow2.svg";

const Nav = () => {
  return (
    <div className={classes.navBar}>
      <nav>
        <ul>
          <li>
            <img
              src={logoDash}
              alt="Logo for dashboard"
              className={classes.navLogo}
            />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <img
              src={logoMedia}
              alt="Logo for movies"
              className={classes.navLogo}
            />
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <img
              src={logoPeople}
              alt="Logo for resources"
              className={classes.navLogo}
            />
            <NavLink to="/resources">Resources</NavLink>
            <img
              src={logoClosed}
              className={classes.closedDropdown}
              alt="Dropdown menu logo"
            />
          </li>
          <li>
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
