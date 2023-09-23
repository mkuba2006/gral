import { useContext, useState } from "react";
import "./aside.css";
import List from "../../logic/itemy";




const Head = (props) => {
  return (
    <header className="sidebar-header" onClick={props.onClick}>
        <button type="button" className="sidebar-burger">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
        </button>
        <img src="https://www.gral.pl/images/logo-h2.gif" className="sidebar-logo" alt="Logo" />
    </header>
  );
};

export default Head;
