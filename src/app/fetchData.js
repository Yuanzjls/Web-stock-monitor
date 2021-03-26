import axios from "axios"
import {updateStock} from "../features/stockSlice"

const apiKey = "c1433cn48v6s4a2e39q0";
const preUrl = "https://finnhub.io/api/v1/quote?symbol=";
export const fetchAllData = (stocks)=>(dispatch, getState)=>{
    let apiList = stocks.map(stock => ({ apiUrl: makeUrl(stock.symbol) }));
    let promises = apiList.map(api => axios(api.apiUrl));
    console.log('Hello');
    console.log(dispatch);
    axios.all(promises).then(axios.spread((...responses) => {
        const newPrice = responses.map(item=>({priceInfo:{pricePre:item.data.pc, priceCur:item.data.c}}));
        dispatch(updateStock(newPrice));
    })).catch(errors => {
        console.log(errors);
    });
}

export function makeUrl(newsymbol) {
    return `${preUrl}${newsymbol}&token=${apiKey}`
}