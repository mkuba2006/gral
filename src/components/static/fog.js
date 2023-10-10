import "./fog.css";
import { useContext } from "react";
import OpenContext from '../logic/open_context';
function Fog() {
  const {open} = useContext(OpenContext);

    return (
      <div className={` ${open ? "before" : ""}`}>
      </div>
    );
}
  
 export default Fog;