import { useState } from "react";
import "./aside.css";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMemory, faMicrochip, faHardDrive, faTachographDigital, faChalkboard} from '@fortawesome/free-solid-svg-icons'


//<FontAwesomeIcon icon={faEnvelope} />

const navItems = [
  {
    name: "Kart graficzne",
    img: faTachographDigital,
    options: ["AMD Radeon", "nVidia GeForce"]
  },
  {
    name: "Procesory",
    img: faMicrochip,
    options: [
      "Socket AM1 / FM1 / FM2",
      "Socket LGA1151",
      "Socket LGA1151",
      "Socket AM4",
      "Socket AM4",
      "Socket LGA2066",
      "Socket LGA2066",
      "Socket LGA1200",
      "Socket LGA1200",
      "Socket LGA1700",
      "Socket LGA1700",
      "Socket AM5",
      "Socket AM5"
    ]
  },
  {
    name: "Pamięci RAM",
    img: faMemory,
    options: ["DDR 3", "DDR 4", "DDR 5"]
  },
  {
    name: "Płyty główne",
    img: faChalkboard,
    options: [
      "Socket AM3 / AM3+",
      "Socket AM4",
      "Socket AM5",
      "Socket LGA1151",
      "Socket LGA2066",
      "Socket LGA1200",
      "Socket LGA1700",
      "Socket TR4"
    ]
  },
  {
    name: "Dyski Twarde",
    img: faHardDrive,
    options: [
      "SSD PCI-Express",
      "SSD SATA",
      "2,5 cala SATA",
      "3,5 cala SATA",
      "Zewnętrzne USB i WiFi",
      "Obudowy i adaptery",
      "Akcesoria",
      "Kieszenie"
    ]
  }
];

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const toggleGroup = (index) => {
    if(isOpen){
    setExpandedGroup((prevGroup) => (prevGroup === index ? null : index));
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button type="button" className="sidebar-burger" onClick={() => setIsOpen(!isOpen)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </button>
          <img src="https://www.gral.pl/images/logo-h2.gif" className="sidebar-logo" alt="Logo" />
        </header>

        <nav className="sidebar-menu">
          {navItems.map((item, index) => (
            <button className="sidebar-button">
                <ul key={index}>
                    <button onClick={() => toggleGroup(index)}>
                      <span className="title"><FontAwesomeIcon icon={item.img} className="icon" />{item.name}</span>
                      <p>
                      {expandedGroup === index &&
                          item.options.map((option, optionIndex) => (
                          <li onClick={() => setIsOpen(!isOpen)} className="sidebar-li" key={optionIndex}>{option}</li>
                      ))}
                      </p>
                    </button>
                </ul>
            </button>
          ))}
        </nav>


      </div>
    </aside>
  );
};

export default Aside;
