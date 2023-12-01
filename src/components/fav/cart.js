import { useContext } from 'react';
import CartContext from '../logic/cart_context';
import Test from './test';
import './element.css';
import OpenContext from '../logic/open_context';
function Fav() {

    const Otx = useContext(OpenContext);

    const ctx = useContext(CartContext);
    ctx.favourites.map((item)=>(
        console.log(ctx.favourites)
    ))
    
    const setopen = () =>{
        Otx.setOpen();
    }

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