import ListContext from "./itemy";
import { useState } from "react";


const ListProvider = ({ children }) => {
  let [name, sName] = useState(''); 
  let [sorts, ssort] = useState(''); 
  let [price, sprice] = useState(5000); 
  let [firmy, gfirmy] = useState([]); 
  let [filtry, gfiltry] = useState([]); 
  const getName = (newName) => {
    sName(newName);
    console.log(newName);
  };

  const getsort = (s) => {
    ssort(s);
  };

  const getprice = (s) => {
    sprice(s);
  };
  const getf = (s) => {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
      let producent = s[i].producent;
      if (arr.indexOf(producent) === -1) {
        arr.push(producent);
      }
    }
  };
  const getfiltry = (filtr, stan) => {
    if (stan === "ADD") {
      filtry.push(filtr);
    } else if (stan === "REMOVE") {
      const updatedFiltry = filtry.filter(item => item !== filtr);
      filtry = updatedFiltry;
    }
  
    console.log(filtry);
    gfiltry(filtry);
  };
  

  const values = {
    name: name,
    getit: getName,
    sort: sorts,
    getsort: getsort,
    price: price,
    getprice: getprice,
    firmy: [],
    getfirmy : getf,
    filtry: [],
    getfiltry : getfiltry,
  }

  return (
    <ListContext.Provider value={values}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;