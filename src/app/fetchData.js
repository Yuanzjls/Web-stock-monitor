import axios from 'axios'
import { addStock, updateStock, editStock } from '../features/stockSlice'

const apiKey = 'c1433cn48v6s4a2e39q0'
const preUrl = 'https://finnhub.io/api/v1/quote?symbol='

export const fetchAllData = (stocks) => (dispatch, getState) => {
	let apiList = stocks.map((stock) => ({ apiUrl: makeUrl(stock.symbol) }))
	let promises = apiList.map((api) => axios(api.apiUrl))

	axios
		.all(promises)
		.then(
			axios.spread((...responses) => {
				const newPrice = responses.map((item) => ({ priceInfo: { pricePre: item.data.pc, priceCur: item.data.c } }))
				console.log('fetch success')
				dispatch(updateStock(newPrice))
			})
		)
		.catch((errors) => {
			console.log(errors)
		})
}

export const fetchAddedData = (newSymbol) => (dispatch, getState) => {
	let states = getState()

	if (states.stock.map((stock) => stock.symbol).includes(newSymbol)) {
		alert(newSymbol + ' is already on the watch list')
		return
	}
	axios
		.get(makeUrl(newSymbol), { timeout: 500 })
		.then((response) => {
			const newStock = { symbol: newSymbol, priceInfo: { pricePre: response.data.pc, priceCur: response.data.c } }
			dispatch(addStock(newStock))
		})
		.catch((errors) => {
			if (errors.code === 'ECONNABORTED') {
				alert('The ' + newSymbol + ' is not a stock symbol')
			}
			console.log(errors)
		})
}
export const fetchEditedData = (editedSymbol) => (dispatch, getState) => {
	let states = getState()

	if (states.stock.map((stock) => stock.symbol).includes(editedSymbol.symbol)) {
		alert(editedSymbol.symbol + ' is already on the watch list')
		return
	}

	axios
		.get(makeUrl(editedSymbol.symbol), { timeout: 500 })
		.then((response) => {
			const newStock = { id: editedSymbol.id, symbol: editedSymbol.symbol, priceInfo: { pricePre: response.data.pc, priceCur: response.data.c } }
			dispatch(editStock(newStock))
		})
		.catch((errors) => {
			if (errors.code === 'ECONNABORTED') {
				alert('The ' + editedSymbol.symbol + ' is not a stock symbol')
			}
			console.log(errors)
		})
}
export function makeUrl(newSymbol) {
	return `${preUrl}${newSymbol}&token=${apiKey}`
}
