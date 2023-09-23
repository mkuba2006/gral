import React, { useState } from 'react';

const OpenContext = React.createContext({
  open: false,
  setOpen: () => {},
});

export default OpenContext;
