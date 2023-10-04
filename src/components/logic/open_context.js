import React, { useState } from 'react';

const OpenContext = React.createContext({
  open: false,
  setOpen: () => {},
  hover: false,
  setHover: () => {},
});

export default OpenContext;
