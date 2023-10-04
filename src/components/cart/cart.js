// img, amount price
import { useContext } from 'react';
import CartContext from '../logic//cart_context';
import OpenContext from '../logic/open_context';



import './cart.css'
// import Element from './element';

function Cart() {

    const ctx = useContext(CartContext);
    const otx = useContext(OpenContext);


    return (
        <div id="before">
            {otx.open &&
                <div id="main">
                    {/* {ctx.items.map((item)=>(
                        <Element
                        img={item.img}
                        amount = {item.totalAmount}
                        price={item.price}
                        />
                    ))} */}
                </div>
            }
        </div>
    );
  }
  
  export default Cart;