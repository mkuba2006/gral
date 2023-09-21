import "./item.css";

function Form(props) {
    const add = (e) =>{
      e.preventDefault();
      const val = 1;
      props.onAdd(val);
    }

    return (
      <form onSubmit={add}>
        <button type="submit">Add</button>
      </form>
    );
}
  
export default Form;