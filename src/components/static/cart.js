import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import OpenContext from '../logic/open_context';

function Cart() {
  const Otx = useContext(OpenContext);
  const change = () =>{
    Otx.setOpen()
  }


  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingBag} onClick={change}/>
    </div>
  );
}
  
 export default Cart;