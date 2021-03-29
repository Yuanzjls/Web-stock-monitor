import NewStockForm from './components/NewStockForm/NewStockForm'
import React, { useState, useRef, useEffec, useEffect } from 'react'

import Stock from './components/Stock/Stock'
import axios from 'axios'
import moment from 'moment-timezone'
import { fetchAllData } from './app/fetchData'
import { selectStock } from './features/stockSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
	const [timeUpdate, setTimeUpdate] = useState(moment().format('LT'))
	const stockList = useSelector(selectStock)
	const length = stockList.length
	const noun = length > 1 ? 'stocks' : 'stock'
	const headingText = `${length} ${noun}`
	const dispatch = useDispatch()

	const useInterval = (callback, delay) => {
		const saveCallback = useRef()

		useEffect(() => {
			saveCallback.current = callback
		})

		useEffect(() => {
			function tick() {
				saveCallback.current()
			}

			if (delay !== null) {
				tick()
				let id = setInterval(tick, delay)
				return () => clearInterval(id)
			}
		}, [delay])
	}
	useInterval(() => dispatch(fetchAllData(stockList)), 60000)
	return (
		<div className="stockapp stack-large">
			<h1>Stock Prices</h1>
			<p style={{ textAlign: 'center' }}>Update at {timeUpdate}</p>
			<NewStockForm />
			<div className="filters btn-group stack-exception"></div>
			<h2 id="list-heading" tabIndex="-1">
				{headingText}
			</h2>
			<ul role="list" className="stock-list stack-large stack-exception">
				{stockList.map((stock) => (
					<Stock id={stock.id} symbol={stock.symbol} key={stock.id} priceInfo={stock.priceInfo} />
				))}
			</ul>
		</div>
	)
}

export default App
