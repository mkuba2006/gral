import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

function Cart() {
  return (
    <div className="cart">
      <FontAwesomeIcon id="icon" icon={faShoppingBag}/>
    </div>
  );
}
  
 export default Cart;