import React, { createContext, useReducer } from 'react';
import OpenContext from './open_context';
const first = false;

const reducer = (state, action) => {
    // console.log("stan",!state);
    return !state;
};
  

const OpenProvider = (props) => {
  const [isOpen, change] = useReducer(reducer, first);
  const [isHover, changeH] = useReducer(reducer, first);
  const [isCart, changeC] = useReducer(reducer, first);

  
  const toggleOpen = () => {
    change({ type: 'TOGGLE' });
  };

  const toggleHover = () => {
    changeH({ type: 'HOVER' });
  };

  const toggleCart = () => {
    changeC({ type: 'CART' });
  };



  const OpenCTX = {
    open: isOpen,
    setOpen: toggleOpen,
    hover: isHover,
    setHover: toggleHover,
    seeCart: isCart,
    setCart: toggleCart,
  };

  return (
    <OpenContext.Provider value={OpenCTX}>
      {props.children}
    </OpenContext.Provider>
  );
};

export default OpenProvider ;
