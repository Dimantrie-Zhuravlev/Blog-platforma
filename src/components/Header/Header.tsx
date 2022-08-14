import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes.realworld}>Realworld Blog</div>
      <div className={classes.autorisation}>
        <button className={classes["header-button"]}>Sign In</button>
        <button className={classes["header-button"]}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
