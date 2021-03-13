import React, {useState} from "react";

export default function Stock(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [hidden, setHidden] = useState(true);

    const priceChange = props.priceInfo.priceCur-props.priceInfo.pricePre;
    const priceChangePercentage = Math.abs(priceChange / props.priceInfo.pricePre * 100);


    function mouserOver(){
        setHidden(false);
    }
    function mouseOut(){
        setHidden(true);
    }
    
    const editingTemplate = (
        <form className="stack-small" onSubmit={(e)=>{e.preventDefault(); props.editStock(props.id, newName); setNewName(""); setEditing(false)}}>
            <div className="form-group">
                <label className="stock-label" htmlFor={props.id}>
                    Input a stock name:
                </label>
                <input id={props.id} className="stock-text" type="text" value={newName} onChange={e=>{setNewName(e.target.value);}}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn stock-cancel" onClick={()=>{setEditing(false);}}>
                    Cancel
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
                <button type="submit" className="btn btn__primary stock-edit">
                    Save
                    <span className="visually-hidden">Input a stock name:</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate=(
    <div className="stack-small" onMouseOver={mouserOver} onMouseOut={mouseOut}>
    <div className="c-cb"  >       
        <div className="stock-container">
            <label className="stock-label" htmlFor={props.id}>
                {props.name}
            </label> 
            <div>      
                <span className="stock-price">{props.priceInfo.priceCur}</span><br/>
                <span className="stock-price" style={{color:priceChange>0?"green":"red"}}>{priceChange>0?"+":""}{Number(priceChange).toFixed(2)} ({Number(priceChangePercentage).toFixed(2)}%)<br/></span>
            </div>  
        </div>
    </div>
    <div className="btn-group"  style={{visibility: hidden?"hidden":"visible"}}>
        <button type="button" className="btn" onClick={()=>setEditing(true)} >
            Edit <span className="visually-hidden">{props.name} </span>
        </button>
        <button type="button" className="btn btn__danger" onClick={()=>{props.deleteStock(props.id)}}>
            Delete <span className="visually-hidden">{props.name}</span>
        </button>
        
    </div>
    <hr />
    </div>
);


    return(
        <li className="stock">{isEditing? editingTemplate: viewTemplate}</li>
    );
}