
import "./aside.css";
import React from "react";

const Li = ({ option, setIt }) => {
  return (
    <li onClick={() => setIt(option)} className="sidebar-li">
      {option}
    </li>
  );
};

export default Li;
