import Header from "./components/static/header";
import Aside from "./components/static/aside";
import List from "./components/logic/itemy";
import { Fragment } from "react";
import Items from "./components/items/items";
import Provider from "./components/logic/car_provider";
function App() {
  const Listvalue = {
    name: '', 
  };
  return (
    <Provider>
      <Header/>
      <List.Provider value={Listvalue}>
        <Aside/>
      </List.Provider>
      <Items />
    </Provider>
  );
}

export default App;
