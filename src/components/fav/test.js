import './element.css'

function Test(props) {

    return (
        <div id="element">
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="info">
                <h2>
                  <span id='sp1'>Nazwa:{props.model}<br></br></span>
                </h2>
            </div>
        </div>
    );
}
  
export default Test;