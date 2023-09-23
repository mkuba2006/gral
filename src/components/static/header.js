import './header.css';
import Cart from './cart';
import { useContext, useEffect, useState } from "react";
import CartContext from '../logic/cart_context'
import OpenContext from '../logic/open_context';
import List from '../logic/itemy';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  const Otx = useContext(OpenContext);
  const change = () =>{Otx.setOpen()};
  const ctx = useContext(CartContext);
  const {items} = ctx; 
  useEffect(()=>{},[items])
  const length = items.reduce((cur,el)=>{
      return cur + Number(el.amount);
  },0)



    return (
      <div className="header">
        <img src='https://www.gral.pl/images/logo-h2.gif'/>
    
        <button id='button' onClick={change}>
          <Cart/> Cart
          <span>{length}</span>
        </button>
      </div>
    );
  }
  
  export default Header;
  