import Item from "./item";
import { useContext } from "react";
import OpenContext from "../logic/open_context";
import classes from './item.module.css';
import { itemy } from "../items";
import ListContext from "../logic/itemy"

function Items() {
   const Otx = useContext(OpenContext);
   const ltx = useContext(ListContext);
   const tr = () =>{
      console.log(ltx.name)
   }

    return (
      <>
         {!Otx.seeCart &&
            <ul onClick={tr} className={classes.ul}>
               {itemy.filter((item)=>{
                  return ltx.name.toLowerCase() === '' ? item : ltx.name.toLowerCase() === item.szukaj.toLowerCase()
               }).map((ite)=>(
                     <Item
                        key={ite.model}
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
                     />
               ))}
            </ul>
         }
      </>
    );
}
  


{/* 
.filter((item)=>{
   return ltx.name.toLowerCase() === item.szukaj.toLowerCase()
}) 
*/}

export default Items;