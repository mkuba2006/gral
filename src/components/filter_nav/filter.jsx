import Price_range from "./price_range";
import Sortuj from "./sortuj";
import './filter.css'
import OpenContext from "../logic/open_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons'
import { memo, useContext } from "react";
import ListContext from "../logic/itemy";
import Checklist from "./checlist";


function Filter() {
    const Otx = useContext(OpenContext)
    const ltx = useContext(ListContext)

    const changeVisibility = () => {
        Otx.setVisible();
        console.log(Otx.ELvisible);
    }
    const clc= ()=>{
        ltx.getit('');
        ltx.getprice('5000');
    }
    return (
        <>
            {!Otx.seeCart && (
                <div id="filters">
                    <div id="filters_one">
                        <Sortuj />
                        <Price_range />
                        <button id="checklist_button" onClick={changeVisibility}>Filters</button>
                    </div>
                    <button id="reset_button" onClick={clc}><FontAwesomeIcon icon={faX} /><span>reset filters</span></button>
                </div>
            )}
            {Otx.ELvisible && <Checklist />}
        </>
    );
}
  
export default memo(Filter);