import "./fog.css";
import { useContext } from "react";
import OpenContext from '../logic/open_context';
function Fog() {
  const Otx = useContext(OpenContext);
  const {open} = useContext(OpenContext);
  const change = () =>{
    Otx.setOpen()
  }

    return (
      <div onClick={change} className={` ${open ? "before" : ""}`}>
      </div>
    );
}
  
 export default Fog;