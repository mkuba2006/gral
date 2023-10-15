import { useReducer } from "react";
import CartContext from "./cart_context";

const basic = { items: [], totalAmount: 0 };

const reducer = (stan, obecny) =>{

  let items = [...stan.items];

  if(obecny.type === "add"){
    const index = stan.items.findIndex((item)=> item.id === obecny.item.id);
    const ilosc = stan.totalAmount + obecny.item.cena * obecny.item.amount;
    const citem = stan.items[index];
    if(citem){
      const am = citem.amount + obecny.item.amount;
      const updatedItem = {...citem, amount: am,};
      items[index] = updatedItem;
    }else{
      items = stan.items.concat(obecny.item);
    }
    console.clear();
    console.log(items);
    console.log(stan.totalAmount);
    console.log(obecny.item.cena);
    console.log(obecny.item.amount);
    return{
      items: items,
      totalAmount: ilosc 
    }
  }

  if(obecny.type === "remove"){

  }

}

const Provider = (props) =>{
    const [state, action] = useReducer(reducer,basic)


    const add = (item) =>{
      action({type:"add", item:item})
    }
    const remove = (item) =>{
      action({type:"remove", item:item})
    }

    const cartContext = {
      items: state.items,
      totalAmount: state.totalAmount,
      addItem: add,
      removeItem: remove,
    }
    return(
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    )
}
export default Provider;
