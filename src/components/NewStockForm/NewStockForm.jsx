import "./style.css"
import React, {useState} from "react";

export default function Form(props){
    const [name, setName] = useState('');
    function handleSubmit(e){
      e.preventDefault();
      props.addStock(name);
      setName("");
    }
    function handleChange(e){
      setName(e.target.value);
    }
    return (<form onSubmit={handleSubmit}>
        <h2 className="label-wrapper"><label htmlFor="new-stock-input" className="label__lg">What stock do you want to add?</label></h2>
      
      <input type="text" placeholder="Input a new stock" id="new-stock-input" required className="input input__lg" name="text" autoComplete="off" value={name} onChange={handleChange} />
      <button type="submit" className="btn btn__primary btn__lg">Add</button>
      </form>);  
};