import React, { createContext, useState } from 'react';

const ListContext = createContext({
  name: '',
  getit: (newName) => {},
});

export default ListContext;
