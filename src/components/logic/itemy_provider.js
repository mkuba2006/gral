import ListContext from "./itemy";
import { useState } from "react";


const ListProvider = ({ children }) => {
  const [name, sName] = useState(''); 
  const [sorts, ssort] = useState(''); 
  const [price, sprice] = useState(5000); 
  const [firmy, gfirmy] = useState([]); 

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

  const values = {
    name: name,
    getit: getName,
    sort: sorts,
    getsort: getsort,
    price: price,
    getprice: getprice,
    firmy: [],
    getfirmy : getf,
  }

  return (
    <ListContext.Provider value={values}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;