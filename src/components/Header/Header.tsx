import React from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes["header-container"]}>
        <Link to="/articles">
          <div className={classes.realworld}>Realworld Blog</div>
        </Link>
        <div className={classes.autorisation}>
          <Link to="/sign-in">
            <button className={classes["header-button"]}>Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className={classes["header-button"]}>Sign Up</button>
          </Link>
        </div>
      </div>
      <Outlet />;
    </React.Fragment>
  );
};

export default Header;
