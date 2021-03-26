import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const stockSlice = createSlice({
	name: 'stock',
	initialState: [
		{ id: 'stock-0', symbol: 'STM', priceInfo: { pricePre: 0, priceCur: 0 } },
		{ id: 'stock-1', symbol: 'TXN', priceInfo: { pricePre: 0, priceCur: 0 } },
		{ id: 'stock-2', symbol: 'AMD', priceInfo: { pricePre: 0, priceCur: 0 } },
		{ id: 'stock-3', symbol: 'MSFT', priceInfo: { pricePre: 0, priceCur: 0 } },
		{ id: 'stock-4', symbol: 'INTC', priceInfo: { pricePre: 0, priceCur: 0 } },
	],
	reducers: {
		addStock: (state, action) => {
			console.log(action)
			return [...state, { id: 'stock-' + nanoid(), nasymbolme: action.payload.symbol, priceInfo: { pricePre: 0, priceCur: 0 } }]
		},
		deleteStock: (state, action) => {
			return state.filter((item)=>item.id !==action.payload.id);
		},
		editStock: (state, action) => {

			return state.map((item)=>{
				if (item.id === action.payload.id){
					return {...item, symbol:action.payload.symbol};
				}
				else {
					return item;
				}
			})
		},
		updateStock: (state, action) =>{
			const newState = state.map((item, index)=>{
				return {...item, priceInfo:action.payload[index].priceInfo};
			})


			return newState;
		}
	},
})

export const { addStock, deleteStock, editStock, updateStock } = stockSlice.actions

export const selectStock = (state) => state.stock

export default stockSlice.reducer
