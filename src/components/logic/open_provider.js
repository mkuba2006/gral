import React, { createContext, useReducer } from 'react';
import OpenContext from './open_context';

const reducer = (state, action) => !state;

const OpenProvider = (props) => {
  const [isOpen, change] = useReducer(reducer, false);
  const [isHover, changeH] = useReducer(reducer, false);
  const [isFavhover, changeFavH] = useReducer(reducer, false);
  const [isCart, changeC] = useReducer(reducer, false);

  const toggle = (setter) => () => setter({ type: 'TOGGLE' });

  const OpenCTX = {
    open: isOpen,
    setOpen: toggle(change),
    hover: isHover,
    setHover: toggle(changeH),
    Favhover: isFavhover,
    setFavHover: toggle(changeFavH),
    seeCart: isCart,
    setCart: toggle(changeC),
  };

  return (
    <OpenContext.Provider value={OpenCTX}>
      {props.children}
    </OpenContext.Provider>
  );
};

export default OpenProvider;
