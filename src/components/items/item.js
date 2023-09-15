import Form from "./form";
import CartContext from "../logic/cart_context";
import "./item.css";
import { useContext } from "react";


function Item(props) {
  const ctx = useContext(CartContext);

  const addtocart = (ilosc) => {

    ctx.addItem({
      id: props.id,
      model: props.model,
      amount: Number(ilosc),
      cena: props.cena,
      img: props.img,
      producent: props.producent,
    });
    console.log(props.id,props.model,Number(ilosc));
  }

  return (
    <li className="item">
      <div className="img_cont">
        <img src={props.img} alt={props.model} className="item-img" />
      </div>
      <h2>{props.producent} {props.model}</h2>
      <h3>{props.cena}</h3>
      <Form onAdd={addtocart} />
    </li>
  );
}

export default Item;
