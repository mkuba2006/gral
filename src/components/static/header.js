import classes from './header.module.css'
import Cart from './cart';
function Header() {
    return (
      <div className={classes.header}>
        <img src='https://www.gral.pl/images/logo-h2.gif'/>
        <Cart/>
      </div>
    );
  }
  
  export default Header;
  