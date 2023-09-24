import './header2.css';
import Cart from './cart';
import { useContext, useEffect, useState } from "react";
import CartContext from '../../logic/cart_context'
import OpenContext from '../../logic/open_context';
import List from '../../logic/itemy';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import XAside from './menu/x-aside';

function XHeader() {
  const Otx = useContext(OpenContext);
  const change = () =>{Otx.setOpen()};
  const ctx = useContext(CartContext);
  const {items} = ctx; 
  useEffect(()=>{},[items])
  const length = items.reduce((cur,el)=>{
      return cur + Number(el.amount);
  },0)

    return (
      <div className="header2">
        <img src='https://www.gral.pl/images/logo-h2.gif' className='img2'/>
          <XAside />
        <button className='button' onClick={change}>
          <Cart/>
        </button>
      </div>
    );
  }
  
  export default XHeader;
  