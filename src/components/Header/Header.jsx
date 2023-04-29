import React from "react";
import classes from "./Header.module.css";
import accLogo from "../../images/account_circle_filled.svg";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <p className={classes.userName}>Darth</p>
        <img src={accLogo} className={classes.userLogo} alt="account logo" />
      </header>
    </div>
  );
};

export default Header;
