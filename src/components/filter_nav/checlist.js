import OpenContext from "../logic/open_context";
import { useContext } from "react";
import ListContext from "../logic/itemy";
import { itemy } from "../items";
function Checklist() {
    const Otx = useContext(OpenContext);
    const ltx = useContext(ListContext);

    const types = [];
    const producents = [];
    const Cards_F1 = [];
    const Cards_F2 = [];
    const Cards_F3 = [];
    const Cards_F4 = [];




    function push(array, value) {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    }
    
    itemy.forEach(item => {
        push(types, item.type);
        push(producents, item.producent);
    
        if (item.type === 'Graphics card') {
            push(Cards_F1, item.szczegol.jeden);
            push(Cards_F2, item.szczegol.dwa);
            push(Cards_F3, item.szczegol.trzy);
            push(Cards_F4, item.szczegol.cztery);
        }
    });
    

    console.clear();
    console.log('types: ',types);
    console.log('producents: ',producents);
    console.log('GC1: ',Cards_F1);
    console.log('GC2: ',Cards_F2);
    console.log('GC3: ',Cards_F3);
    console.log('GC4: ',Cards_F4);
    return (
        <div>
            {types.map((filt) => (
                <div key={filt}>
                    <input type="checkbox" id={filt} name={filt} value={filt} />
                    <label htmlFor="vehicle1"> {filt}</label>
                </div>
            ))}
            
        </div>
    );
}
  
export default Checklist;