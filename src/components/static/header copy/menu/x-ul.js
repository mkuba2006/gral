// li.js
import React from "react";
import classes from "./aside.module.css";

const Li = ({ onClick, children }) => {
  return (
    <li onClick={onClick} className={classes.sidebar_li}>
      {children}
    </li>
  );
};

export default Li;

