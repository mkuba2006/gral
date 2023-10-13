import ListContext from "./itemy";
import { useState } from "react";


const ListProvider = ({ children }) => {
  const [name, sName] = useState(''); 
  const [sorts, ssort] = useState(''); 

  const getName = (newName) => {
    sName(newName);
  };

  const getsort = (s) => {
    ssort(s);
  };


  const values = {
    name: name,
    getit: getName,
    sort: sorts,
    getsort: getsort,
  }

  return (
    <ListContext.Provider value={values}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;