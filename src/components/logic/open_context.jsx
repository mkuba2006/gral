import React, { useState } from 'react';

const OpenContext = React.createContext({
  open: false,
  setOpen: () => {},
  hover: false,
  setHover: () => {},

  Favhover: false,
  setFavHover: () => {},

  seeCart: false,
  setCart: () => {},

  ELvisible: false,
  setVisible: () => {},

});

export default OpenContext;
