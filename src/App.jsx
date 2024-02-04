import Header from "./components/static/header/header";
import Aside from "./components/static/aside/aside";
import Items from "./components/items/render_list";
import Provider from "./components/logic/cart_provider";
import Fog from "./components/static/fog/fog";
import OpenProvider from "./components/logic/open_provider";
import Cart_main from "./components/cart/cart";
import ListProvider from "./components/logic/itemy_provider";
import Filter from "./components/filter_nav/filter";
import { itemy } from "./components/items";
import { useContext } from "react";
import ListContext from "./components/logic/itemy";
// import Fav from "./components/fav/cart";

function App() {
  const Listvalue = {
    name: '', 
  };
  const ltx = useContext(ListContext)
  





  

  return (
    <Provider>
      <OpenProvider>
        <Fog />
        <ListProvider value={Listvalue}>
          <Header/>
          <Aside/>
          <Cart_main />
          <Filter/>
          <Items />
        </ListProvider>
      </OpenProvider>
    </Provider>
  );
}

export default App;