import Header from "./components/static/header";
import Aside from "./components/static/aside/aside";
import List from "./components/logic/itemy";
import { Fragment,useState, createContext } from "react";
import Items from "./components/items/items";
import Provider from "./components/logic/car_provider";
import Cart from "./components/cart/cart";
import Fog from "./components/static/fog";
import OpenProvider from "./components/logic/open_provider";



function App() {

  const Listvalue = {
    name: '', 
  };



  return (
    <Provider>
      <OpenProvider>
        <Fog />
        <Cart/>
        <Header/>
        <List.Provider value={Listvalue}>
          {/* <Aside/> */}
        </List.Provider>
        <Items />
      </OpenProvider>
    </Provider>
  );
}

export default App;