import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import './header2.css';
function Cart() {
  return (
    <div className="cartS">
      <FontAwesomeIcon id="icon2" icon={faShoppingBag}/>
    </div>
  );
}
  
 export default Cart;