import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import './header.css';
function Cart() {
  return (
    <div className="cart">
      <FontAwesomeIcon id="icon" icon={faShoppingBag}/>
    </div>
  );
}
  
 export default Cart;