import { configureStore } from '@reduxjs/toolkit'
import stockReducer from '../features/stockSlice'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export default configureStore({
	reducer: {
		stock: stockReducer,
	},
	middleware: [thunk],
})
