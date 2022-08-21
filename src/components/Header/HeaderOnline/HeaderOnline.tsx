import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IStateUser } from "../../../types/StateRedux";

import style from "./HeaderOnline.module.scss";

const HeaderOnline = () => {
  const name = useSelector((state: IStateUser) => state.user.user.username);
  const img = useSelector((state: IStateUser) => state.user.user.image);
  return (
    <div className={style.container}>
      <button className={style.create}>Create article</button>
      <Link to={`/profile`}>
        <span className={style.name}>{name}</span>
      </Link>
      <div className={style.img}>
        <img src={img}></img>
      </div>
      <button className={style.logOut}>Log Out</button>
    </div>
  );
};

export default HeaderOnline;
