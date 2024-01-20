import Item from "./item";
import { useContext, useEffect, useState } from "react";
import OpenContext from "../logic/open_context";
import classes from './item.module.css';
import { itemy } from "../items";
import ListContext from "../logic/itemy";

function Items() {
   const Otx = useContext(OpenContext);
   const ltx = useContext(ListContext);
   const val = ltx.sort;
   const price = ltx.price;
   const [filtItemy, setfiltItemy] = useState(itemy);

   useEffect(() => {
      const updatedItems = itemy
         .filter((item) => ltx.name.toLowerCase() === '' ? item : ltx.name.toLowerCase() === item.szukaj.toLowerCase())
         .filter((item) => price === '' ? item : item.cena < price)
         .filter((item) => ltx.filtry.length === 0 || ltx.filtry.includes(item.producent));

      setfiltItemy(updatedItems);
   }, [ltx.name, ltx.sort, ltx.price, ltx.filtry]);

   if (val === "cena-malejaco") filtItemy.sort((a, b) => b.cena - a.cena);
   else if (val === "cena-rosnaco") filtItemy.sort((a, b) => a.cena - b.cena);
   else if (val === "nazwa-malejaco") filtItemy.sort((a, b) => a.producent.localeCompare(b.producent));
   else if (val === "nazwa-rosnaco") filtItemy.sort((a, b) => b.producent.localeCompare(a.producent));
   else if (val === "sortuj") filtItemy.sort((a, b) => a.id - b.id);

   return (
      <>
         {!Otx.seeCart && (
            <ul className={classes.ul} onMouseEnter={() => ltx.getfirmy(filtItemy)}>
               {filtItemy.map((ite) => (
                  <Item
                     key={ite.id}
                     id={ite.id}
                     model={ite.model}
                     amount={ite.amount}
                     cena={ite.cena}
                     img={ite.img}
                     pamiec={ite.Pojemność_pamięci}
                     producent={ite.producent}
                     jed={ite.szczegol.jeden}
                     dwa={ite.szczegol.dwa}
                     trzy={ite.szczegol.trzy}
                     cztery={ite.szczegol.cztery}
                     info1={ite.info1}
                     info2={ite.info2}
                     onClick={() => ltx.getfirmy(ite)}
                  />
               ))}
            </ul>
         )}
      </>
   );  
}

export default Items;
