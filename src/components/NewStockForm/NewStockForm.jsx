import "./style.css"
import React, { useState } from "react";
import { addStock } from "../../features/stockSlice"
import { useDispatch } from 'react-redux'
import { fetchAddedData } from '../../app/fetchData'
export default function Form(props) {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchAddedData(symbol));
    setSymbol("");
  }
  function handleChange(e) {
    setSymbol(e.target.value);
  }
  return (<form onSubmit={handleSubmit}>
    <h2 className="label-wrapper"><label htmlFor="new-stock-input" className="label__lg">What stock do you want to add?</label></h2>

    <input type="text" placeholder="Input a new stock" id="new-stock-input" required className="input input__lg" name="text" autoComplete="off" value={symbol} onChange={handleChange} />
    <button type="submit" className="btn btn__primary btn__lg">Add</button>
  </form>);
};