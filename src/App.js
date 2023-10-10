import Header from "./components/static/header/header";
import Aside from "./components/static/aside/aside";
import Items from "./components/items/render_list";
import Provider from "./components/logic/car_provider";
import Fog from "./components/static/fog";
import OpenProvider from "./components/logic/open_provider";
import Cart_main from "./components/cart/cart";
import ListProvider from "./components/logic/itemy_provider";

function App() {
  const Listvalue = {
    name: '', 
  };



  return (
    <Provider>
      <OpenProvider>
        <Fog />
        <ListProvider value={Listvalue}>
          <Header/>
          <Aside/>
          <Cart_main />
          <Items />
        </ListProvider>
      </OpenProvider>
    </Provider>
  );
}

export default App;