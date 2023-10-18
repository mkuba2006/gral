import { createContext } from 'react';

const ListContext = createContext({
  name: '',
  getit: (newName) => {},
  sort: '',
  getsort: (s) => {},
  price: '',
  getprice: (s) => {},
  firmy: [],
  getfirmy : (f)=>{},
});

export default ListContext;
