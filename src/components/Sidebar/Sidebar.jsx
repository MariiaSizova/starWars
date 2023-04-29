import React from "react";
import classes from "./Sidebar.module.css";
import mainLogo from "../../images/Star_Wars_Logo.svg";
import Nav from "../Nav/Nav";

const Cidebar = () => {
  return (
    <div className={classes.sidebar}>
      <img src={mainLogo} className={classes.swLogo} alt="Logo Star Wars" />
      <Nav />
    </div>
  );
};

export default Cidebar;
