import { useContext, useState } from "react";
import classes from "./aside.module.css";
import Head from "./sidebar-header";
import NavItems from "./dane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenContext from "../../logic/open_context";

import ListContext from "../../logic/itemy";


const Aside = () => {
  const ltx = useContext(ListContext);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const Otx = useContext(OpenContext);

  const change = () =>{Otx.setOpen();}
  const setIt = (i) => {
    change();
    setIsOpen(!isOpen);
  };
  const lst = (i) => {ltx.getit(i);};

  const toggleGroup = (index) => {
    if (isOpen) {
      setExpandedGroup((prevGroup) => (prevGroup === index ? null : index));
    }
  };

  return (
    <div>
      <aside  className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
        <div className={classes.sidebar_inner}>
          <Head onClick={() => {setIsOpen(!isOpen); change();}} />
          <nav className={classes.sidebar_menu}>
          {NavItems.map((item, index) => (
            <div key={index} className={classes.sidebar_button}>
                <ul>
                    <button onClick={() => toggleGroup(index)}>
                      <span className={classes.title}><FontAwesomeIcon icon={item.img} className={classes.icon} />{item.name}</span>
                      <p>
                      {expandedGroup === index &&
                          item.options.map((option, optionIndex) => (
                          <li key={option} onClick={() => {setIsOpen(!isOpen); setIt(option); lst(option)}} className={classes.sidebar_li}>{option}</li>
                      ))}
                      </p>
                    </button>
                </ul>
            </div>
          ))}
        </nav>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
