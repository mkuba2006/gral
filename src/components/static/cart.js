import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import classes from './header.module.css';
function Cart() {
  return (
    <div className={classes.cart}>
      <FontAwesomeIcon id="icon" icon={faShoppingBag}/>
    </div>
  );
}
  
 export default Cart;