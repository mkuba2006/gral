import { useContext, useState } from "react";
import "./aside.css";
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
        <div className="sidebar-inner">
          <Head onClick={() => {setIsOpen(!isOpen); change()}} />
          <nav className="sidebar-menu">
          {NavItems.map((item, index) => (
            <div key={index} className="sidebar-button">
                <ul>
                    <button onClick={() => toggleGroup(index)}>
                      <span className="title"><FontAwesomeIcon icon={item.img} className="icon" />{item.name}</span>
                      <p>
                      {expandedGroup === index &&
                          item.options.map((option, optionIndex) => (
                          <li key={option} onClick={() => {setIsOpen(!isOpen); setIt(option)}} className="sidebar-li">{option}</li>
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
