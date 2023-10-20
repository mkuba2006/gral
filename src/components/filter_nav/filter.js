import Price_range from "./price_range";
import Sortuj from "./sortuj";
import './filter.css'
import OpenContext from "../logic/open_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import ListContext from "../logic/itemy";

function Filter() {
    const Otx = useContext(OpenContext)
    const ltx = useContext(ListContext)
    const clc= ()=>{
        ltx.getit('');
    }

    return (
        (!Otx.seeCart &&
        <div id="filters">
            <div id="filters_one">
                <Sortuj />
                <Price_range />
            </div>
            <button id="reset_button" onClick={clc}><FontAwesomeIcon icon={faX}/><span>reset filters</span></button>
        </div>)
    );
}
  
export default Filter;