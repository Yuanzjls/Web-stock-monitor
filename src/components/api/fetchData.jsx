import axios from "axios"

const apiKey = "c1433cn48v6s4a2e39q0";
const preUrl = "https://finnhub.io/api/v1/quote?symbol=";
export default function fetchData(stocks, onSuccessFetch) {
    let apiList = stocks.map(stock => ({ apiUrl: makeUrl(stock.name) }));
    let promises = apiList.map(api => axios(api.apiUrl));

    axios.all(promises).then(axios.spread((...responses) => {
        const newStocks = stocks.map((stock, index) => {
            return { ...stock, priceInfo: { 'pricePre': responses[index].data.pc, 'priceCur': responses[index].data.c } };
        });
        onSuccessFetch(newStocks);
    })).catch(errors => {
        console.log(errors);
    });
}

export function makeUrl(newName) {
    return `${preUrl}${newName}&token=${apiKey}`
}