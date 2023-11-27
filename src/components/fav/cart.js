import { useContext } from 'react';
import CartContext from '../logic/cart_context';
import Test from './test';
import './element.css';

function Fav() {
    const ctx = useContext(CartContext);
        ctx.favourites.map((item)=>(
            console.log(ctx.favourites)
        ))
    return (
        <>
            <div id="favourites">
                {ctx.favourites.map((item)=>(
                    <Test
                        key={item.id}
                        img={item.img}
                        model ={item.model}
                    />
                ))}
            </div>
        </>
    );
  }
  
  export default Fav;