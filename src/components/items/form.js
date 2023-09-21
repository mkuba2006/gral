import React, { useState } from 'react';
import './item.css';

function Form(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300); 

    const val = 1;
    props.onAdd(val);
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <button
        type="submit"
        className={` ${isClicked ? 'button-clicked' : ''}`}
        onClick={handleButtonClick}
      >
        BUY
      </button>
    </form>
  );
}

export default Form;
