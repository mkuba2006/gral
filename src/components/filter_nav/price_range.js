import React, { useState, useContext } from 'react';
import ListContext from '../logic/itemy'


function Price_range() {
  const [sliderValue, setSliderValue] = useState(5000);
  const ltx = useContext(ListContext)
  
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value)
    ltx.getprice(Number(e.target.value));
  };

  return (
    <div>
      <input type="range" id="slider" name="slider" min="0" max="5000" step="100" value={sliderValue} onChange={handleSliderChange}/>
      <span id="sliderValue">{sliderValue}zł</span>
    </div>
  );
}

export default Price_range;
