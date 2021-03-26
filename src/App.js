import NewStockForm from './components/NewStockForm/NewStockForm'
import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Stock from './components/Stock/Stock'
import axios from 'axios'
import moment from 'moment-timezone'
import {fetchAllData} from './app/fetchData'
import { selectStock } from './features/stockSlice'
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
function App() {	
	const [timeUpdate, setTimeUpdate] = useState(moment().format('LT'));	
	const stockList = useSelector(selectStock);
	const length = stockList.length;
	const noun = length>1? "stocks":"stock";
	const headingText = `${length} ${noun}`;
	const dispatch = useDispatch();
	fetchAllData(stockList)(dispatch);


	return (
		<div className="stockapp stack-large">
			<h1>Stock Prices</h1>
			<p style={{ textAlign: 'center' }}>Update at {timeUpdate}</p>
			<NewStockForm  />
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
