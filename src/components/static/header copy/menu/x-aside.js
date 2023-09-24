// Aside.js
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ul from "./x-ul";
import Li from "./x-li";
import List from "../../../logic/itemy";
import NavItems from "./x-dane";
import OpenContext from "../../../logic/open_context";

import classes from "./aside.module.css";

const XAside = () => {
  const it = useContext(List);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const Otx = useContext(OpenContext);
  const change = () => {
    Otx.setOpen();
  };

  const setIt = (i) => {
    change();
    setIsOpen(!isOpen);
    it.name = i;
    console.log(it.name);
  };

  const toggleGroup = (index) => {
    if (isOpen) {
      setExpandedGroup((prevGroup) => (prevGroup === index ? null : index));
    }
  };

  return (
      <div className={classes.sidebar_inner}>
        {NavItems.map((item, index) => (
          <div key={index} className={classes.sidebar_button}>
            <Ul>
              <button onClick={() => toggleGroup(index)} className={classes.but}>
                <span className={classes.title}>
                  <span className={classes.image}>
                    <FontAwesomeIcon icon={item.img} className={classes.icon} />
                  </span>
                  <span className={classes.Itname} style={{ whiteSpace: "nowrap" }}>
                    {item.name}
                  </span>
                </span>
                <p>
                  {expandedGroup === index &&
                    item.options.map((option, optionIndex) => (
                      <Li key={option} onClick={() => { setIsOpen(!isOpen); setIt(option) }}>{option}</Li>
                    ))}
                </p>
              </button>
            </Ul>
          </div>
        ))}
      </div>
  );
};

export default XAside;
