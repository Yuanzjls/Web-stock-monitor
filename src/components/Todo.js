import React, {useEffect ,useRef, useState} from "react";
const axios = require('axios');
// const async = require("async");
const apiKey = "c1433cn48v6s4a2e39q0";
const preUrl = "https://finnhub.io/api/v1/quote?symbol=";


export default function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [priceInfo, setPriceInfo] = useState({priceChange:0, priceChangePercentage:0});
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const [price, setPrice] = useState({ currentPrice: 0,
    highestPrice: 0, lowestPrice:0, openPrice:0, previousPrice:0});
    const wasEditing = usePrevious(isEditing);
    const apiUrl = `${preUrl}${props.name}&token=${apiKey}`;

    function usePrevious(value){
        const ref=useRef();
        useEffect(()=>{
            ref.current = value;
        });
        return ref.current;
    }


    useEffect(()=>{
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);
    
    useEffect(()=>{
        async function fetchPrice(){
            try{
                let priceChange, priceChangePercentage;
                const response = await axios(apiUrl);
                const stockPrice = {
                    'currentPrice': response.data.c,
                    'highestPrice': response.data.h,
                    'lowestPrice': response.data.l,
                    'openPrice': response.data.o,
                    'previousPrice':response.data.pc
                };
                setPrice(stockPrice);
                priceChange = stockPrice.currentPrice-stockPrice.previousPrice;
                priceChangePercentage = Math.abs(priceChange / stockPrice.previousPrice * 100);
                setPriceInfo({priceChange, priceChangePercentage});
            } catch (error){
                console.log(error);
            }
    }
        fetchPrice();
        const id = setInterval(() => {
            fetchPrice();
            
        }, 60000);
        return ()=>clearInterval(id);
    },[apiUrl]);
    
    
    const editingTemplate = (
        <form className="stack-small" onSubmit={(e)=>{e.preventDefault(); props.editTask(props.id, newName); setNewName(""); setEditing(false)}} ref={editFieldRef}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    Input a stock name:
                </label>
                <input id={props.id} className="todo-text" type="text" value={newName} onChange={e=>{setNewName(e.target.value);}}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={()=>{setEditing(false);}}>
                    Cancel
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate=(
    <div className="stack-small">
    <div className="c-cb">       
        <label className="todo-label" htmlFor={props.id}>
            {props.name}
        </label> 
        <span className="stock-price">{price.currentPrice}</span><br/>
        <span className="stock-price" style={{color:priceInfo.priceChange>0?"green":"red"}}>{Number(priceInfo.priceChange).toFixed(2)}({Number(priceInfo.priceChangePercentage).toFixed(2)}%)</span>
    </div>
    <div className="btn-group">
        <button type="button" className="btn" onClick={()=>setEditing(true)} ref={editButtonRef}>
            Edit <span className="visually-hidden">{props.name} </span>
        </button>
        <button type="button" className="btn btn__danger" onClick={()=>{props.deleteTask(props.id)}}>
            Delete <span className="visually-hidden">{props.name}</span>
        </button>
    </div>
    </div>
);



    return(
        <li className="todo">{isEditing? editingTemplate: viewTemplate}</li>
    );
}