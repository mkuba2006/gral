import OpenContext from "../logic/open_context";
import { useContext, useState, useEffect } from "react";
import ListContext from "../logic/itemy";
import { itemy } from "../items";
import './filter.css';

function Checklist() {
    //const Otx = useContext(OpenContext);
    const ltx = useContext(ListContext);
    const types = [];
    const producents = [];
    const Cards_F1 = [];
    const Cards_F2 = [];
    const Cards_F3 = [];
    const Cards_F4 = [];
  
    function push(array, value) {
      if (!array.includes(value)) {
        array.push(value);
      }
    }
  
    itemy.forEach((item) => {
      push(types, item.type);
      push(producents, item.producent);
  
      if (item.type === 'Graphics card') {
        push(Cards_F1, item.szczegol.jeden);
        push(Cards_F2, item.szczegol.dwa);
        push(Cards_F3, item.szczegol.trzy);
        push(Cards_F4, item.szczegol.cztery);
      }
    });
  
    const handleCheckboxClick = (e) => {
        const { value, checked } = e.target;
    
        if (producents.includes(value)) {
            ltx.getfiltry(value, checked ? 'ADD' : 'REMOVE');
        }
    };

    return (
        <div id="checklist_elements">

            <div id="checklist_list_element">
                <h2>Producents</h2>
                <div id="ul">
                    {producents.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick}/>
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>screen resolution</h2>
                <div id="ul">
                    {Cards_F1.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>Data transfer speed</h2>
                <div id="ul">
                    {Cards_F2.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div id="checklist_list_element">
                <h2>core clock</h2>
                <div id="ul">
                    {Cards_F3.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>core clock(boost)</h2>
                <div id="ul">
                    {Cards_F4.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
  
export default Checklist;