import { createContext } from 'react';

const ListContext = createContext({
  name: '',
  getit: (newName) => {},
  sort: '',
  getsort: (s) => {},
  price: '5000',
  getprice: (s) => {},
  firmy: [],
  getfirmy : (f)=>{},
  filtry: [],
  getfiltry : (f,stan)=>{},
});

export default ListContext;
