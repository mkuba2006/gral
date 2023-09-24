import { useContext, useState } from "react";
import classes from "./aside.module.css";
import List from "../../logic/itemy";
import Head from "./sidebar-header";
import NavItems from "./dane";
import Ul from "./ul";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenContext from "../../logic/open_context"



const Aside = () => {
  const it = useContext(List);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const Otx = useContext(OpenContext);
  const change = () =>{
    Otx.setOpen()
  }
  
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
    <div>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className={classes.sidebar_inner}>
          <Head onClick={() => {setIsOpen(!isOpen); change()}} />
          <nav className={classes.sidebar_menu}>
          {NavItems.map((item, index) => (
            <div key={index} className={classes.sidebar_button}>
                <ul>
                    <button onClick={() => toggleGroup(index)}>
                      <span className={classes.title}><FontAwesomeIcon icon={item.img} className={classes.icon} />{item.name}</span>
                      <p>
                      {expandedGroup === index &&
                          item.options.map((option, optionIndex) => (
                          <li key={option} onClick={() => {setIsOpen(!isOpen); setIt(option)}} className={classes.sidebar_li}>{option}</li>
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
