import React, { createContext, useState } from 'react';

const ListContext = createContext({
  name: '',
  getit: (newName) => {},
  sort: '',
  getsort: (s) => {},
  price: '',
  getprice: (s) => {},
});

export default ListContext;
