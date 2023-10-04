import './cart.css'


function Element(props) {

    return (
        <div id="element">
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="main">
                <span>{props.amount} szt</span>
                <span>{props.price}</span>
            </div>
        </div>
    );
}
  
export default Element;