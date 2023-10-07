import Header from "./components/static/header/header";
import Aside from "./components/static/aside/aside";
import List from "./components/logic/itemy";
import { Fragment,useState, createContext } from "react";
import { useContext } from "react";
import Items from "./components/items/items";
import Provider from "./components/logic/car_provider";
import Fog from "./components/static/fog";
import OpenProvider from "./components/logic/open_provider";
import OpenContext from "./components/logic/open_context";
import Cart_main from "./components/cart/cart";

function App() {
  const Listvalue = {
    name: '', 
  };



  return (
    <Provider>
      <OpenProvider>
        <Fog />
        <Header/>
        <List.Provider value={Listvalue}>
          <Aside/>
        </List.Provider>
        <Cart_main />
        <Items />
      </OpenProvider>
    </Provider>
  );
}

export default App;