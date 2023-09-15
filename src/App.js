import Header from "./components/static/header";
import Aside from "./components/static/aside";
import List from "./components/logic/itemy";
import { Fragment } from "react";
import Items from "./components/items/items";
function App() {
  const Listvalue = {
    name: '', 
  };
  return (
    <Fragment>
      <Header/>
      <List.Provider value={Listvalue}>
        <Aside/>
      </List.Provider>
      <Items />
    </Fragment>
  );
}

export default App;
