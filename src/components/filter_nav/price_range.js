import React, { useState } from 'react';
import ListContext from '../logic/itemy'


function Price_range() {
  const [sliderValue, setSliderValue] = useState(10000);
  const ltx = useContext(ListContext)
  
  const handleSliderChange = (e) => {
    ltx.getprice(e.target.value);
  };

  return (
    <div>
      <input type="range" id="slider" name="slider" min="0" max="10000" step="50" value={sliderValue} onChange={handleSliderChange}/>
      <span id="sliderValue">{sliderValue}zł</span>
    </div>
  );
}

export default Price_range;
