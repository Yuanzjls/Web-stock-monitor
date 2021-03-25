import NewStockForm from './components/NewStockForm/NewStockForm'
import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Stock from './components/Stock/Stock'
import axios from 'axios'
import moment from 'moment-timezone'
import fetchData, { makeUrl } from './components/api/fetchData'
import {selectStock} from "./features/stockSlice"
import {useSelector} from "react-redux"

function App() {
	// const [stocks, setStocks] = useState(props.stocks)
	// const [timeUpdate, setTimeUpdate] = useState(moment().format('LT'))

	// const stockList = stocks.map((stock) => (
	// 	<Stock id={stock.id} name={stock.name} key={stock.id} deleteStock={deleteStock} editStock={editStock} priceInfo={stock.priceInfo} />
	// ))
	// const stocksNoun = stockList.length !== 1 ? 'stocks' : 'stock'
	// const headingText = `${stockList.length} ${stocksNoun}`

	// function onSuccessFetch(newStocks) {
	// 	setStocks(newStocks)
	// 	setTimeUpdate(moment().format('LT'))
	// }

	// useInterval(() => {
	// 	fetchData(stocks, onSuccessFetch)
	// }, 60000)

	// function useInterval(callback, delay) {
	// 	const savedCallback = useRef()

	// 	useEffect(() => {
	// 		savedCallback.current = callback
	// 	})

	// 	useEffect(() => {
	// 		function tick() {
	// 			savedCallback.current()
	// 		}
	// 		fetchData(stocks, onSuccessFetch)

	// 		let id = setInterval(tick, delay)
	// 		return () => clearInterval(id)
	// 	}, [delay])
	// }

	// function deleteStock(id) {
	// 	const remainingStocks = stocks.filter((stock) => id !== stock.id)
	// 	setStocks(remainingStocks)
	// }

	// function editStock(id, name) {
	// 	let newName = encodeURI(name.toUpperCase().trim())

	// 	if (stocks.map((stock) => stock.name).includes(newName)) {
	// 		alert(newName + ' is already on the watch list')
	// 		return
	// 	}

	// 	const editedStocks = [...stocks]

	// 	stocks.forEach((stock, index) => {
	// 		if (id === stock.id) {
	// 			axios
	// 				.get(makeUrl(newName))
	// 				.then((response) => {
	// 					if (response.data.t !== 0) {
	// 						const priceInfo = { pricePre: response.data.pc, priceCur: response.data.c }
	// 						editedStocks[index].name = newName
	// 						editedStocks[index].priceInfo = priceInfo
	// 						setStocks(editedStocks)
	// 					} else {
	// 						alert(name + ' does not exist')
	// 					}
	// 				})
	// 				.catch((errors) => {
	// 					console.log(errors)
	// 				})
	// 		}
	// 	})
	// }

	// function addStock(name) {
	// 	let newName = encodeURI(name.toUpperCase().trim())
	// 	if (stocks.map((stock) => stock.name).includes(newName)) {
	// 		alert(newName + ' is already on the watch list')
	// 		return
	// 	}
	// 	axios
	// 		.get(makeUrl(newName))
	// 		.then((response) => {
	// 			const newStock = { id: 'stock-' + nanoid(), name: newName, priceInfo: { pricePre: response.data.pc, priceCur: response.data.c } }

	// 			if (response.data.t !== 0) {
	// 				setStocks([...stocks, newStock])
	// 			} else {
	// 				alert('The ' + newName + ' is not a stock symbol')
	// 			}
	// 		})
	// 		.catch((errors) => {
	// 			console.log(errors)
	// 		})
	// }

	function addStock(){

	}
	const [timeUpdate, setTimeUpdate] = useState(moment().format('LT'));
	const headingText="Hello";
	const stockList = useSelector(selectStock);
	return (
		<div className="stockapp stack-large">
			<h1>Stock Prices</h1>
			<p style={{ textAlign: 'center' }}>Update at {timeUpdate}</p>
			<NewStockForm addStock={addStock} />
			<div className="filters btn-group stack-exception"></div>
			<h2 id="list-heading" tabIndex="-1">
				{headingText}
			</h2>
			<ul role="list" className="stock-list stack-large stack-exception">
				{stockList}
			</ul>
		</div>
	)
}

export default App
