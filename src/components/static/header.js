import classes from './header.module.css'
import Cart from './cart';
import { useContext, useEffect, useState } from "react";
import CartContext from '../logic/cart_context'

function Header() {

  const ctx = useContext(CartContext);
  const {items} = ctx; 
  useEffect(()=>{},[items])

  const length = items.reduce((cur,el)=>{
      return cur + Number(el.amount);
  },0)

    return (
      <div className={classes.header}>
        <img src='https://www.gral.pl/images/logo-h2.gif'/>
        <Cart/>
        {length}
      </div>
    );
  }
  
  export default Header;
  