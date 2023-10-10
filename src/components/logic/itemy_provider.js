import ListContext from "./itemy";
import { useContext, useState } from "react";








const ListProvider = ({ children }) => {
  const [name, sName] = useState(''); 

  const getName = (newName) => {
    sName(newName);
  };

  const values = {
    name: name,
    getit: getName,
  }

  return (
    <ListContext.Provider value={values}>
      {children}
    </ListContext.Provider>
  );
};
export default ListProvider;