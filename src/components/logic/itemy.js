import React, { createContext, useState } from 'react';

const ListContext = createContext({
  name: '',
  getit: (newName) => {},
  sort: '',
  getsort: (s) => {},
});

export default ListContext;
