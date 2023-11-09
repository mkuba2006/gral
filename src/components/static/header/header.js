import './header.css';
import Cart from './cart';
import { useContext, useEffect } from "react";
import CartContext from '../../logic/cart_context'
import OpenContext from '../../logic/open_context';
import Element from './element';
import FavList from './favlist';

function Header() {
  const Otx = useContext(OpenContext);
  const changeH = () =>{Otx.setHover()};
  const changeC = () =>{Otx.setCart(); console.log('cart: ',Otx.seeCart);};

  const ctx = useContext(CartContext);
  const {items} = ctx; 
  useEffect(()=>{},[items])
  const length = items.reduce((cur,el)=>{
      return cur + Number(el.amount);
  },0)



    return (
      <div className="header">
        <img id='mianhead' src='https://www.gral.pl/images/logo-h2.gif'/>
        <div>
          <div id='buttons'>
            <button id='button'>
              <FavList/>
              Favourite
            </button>
            <button id='button' onMouseEnter={changeH} onMouseLeave={changeH}>
              <Cart/>
              <span>{length}</span>
              Cart
            </button>
          </div>

          {Otx.hover &&
            <div id="mainl" onMouseEnter={changeH} onMouseLeave={changeH}>
            <h2 id='Cart_title'>Cart</h2>
              <div id="elements">
                {ctx.items.map((item)=>(
                    <Element
                    key={item.id}
                    img={item.img}
                    model={item.model}
                    amount = {item.amount}
                    price={item.cena}
                    />
                ))}    
              </div>
              <div id='under'>
                <div id='sumH'>
                  Total price: {ctx.totalAmount} zł
                </div>
                <button id='see_button' onClick={changeC}>SEE CART</button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
  
  export default Header;
  