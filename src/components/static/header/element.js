import './element.css'

function Element(props) {

    return (
        <div id="element">
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="element_main">
                <div id='FST'>
                    <h3>{props.model}</h3>
                </div>
                <div id='SEC'>
                    <span>{props.amount} szt</span>
                    <span>{props.price} zł</span>
                </div>
            </div>
        </div>
    );
}
  
export default Element;