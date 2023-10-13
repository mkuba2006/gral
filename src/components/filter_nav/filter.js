import Price_range from "./price_range";
import Sortuj from "./sortuj";
import './filter.css'



function Filter() {

    return (
        <div id="filters">
            <Sortuj />
            <Price_range />
        </div>
    );
}
  
export default Filter;