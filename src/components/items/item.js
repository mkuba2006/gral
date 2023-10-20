import Form from "./form";
import CartContext from "../logic/cart_context";
import classes from './item.module.css';
import { useContext } from "react";
function Item(props) {
  const ctx = useContext(CartContext);

  const addtocart = (ilosc) => {

    ctx.addItem({
      key: props.id,
      id: props.id,
      model: props.model,
      amount: Number(ilosc),
      cena: props.cena,
      img: props.img,
      producent: props.producent,
      info1: props.info1,
      info2: props.info2,
      pierwszu: props.jed,
      drugi: props.dwa,
      trzeci: props.trzy,
      czwarty: props.cztery,
    });
    // console.log(props.id,props.model,Number(ilosc));
  }

  return (
    <li className={classes.item}>
      <div className={classes.img_cont}>
        <img src={props.img} alt={props.model} className={classes.item_img}/>
      </div>
      <div id="opis">
        <h2>{props.producent} {props.model} {props.info1}</h2>
        <p>{props.jed} | {props.dwa} | {props.trzy}</p>
        <div className={classes.sum}>
          <h3>{props.cena} zł</h3>
          <Form onAdd={addtocart} />
        </div>
      </div>
      <div id="underline"></div>
    </li>
  );
}

export default Item;

