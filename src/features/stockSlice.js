import {createSlice} from "@reduxjs/toolkit"

export const stockSlice = createSlice({
    name: "stock",
    initialState: [
        { id: 'stock-0', name: 'STM', priceInfo: { pricePre: 0, priceCur: 0 } },
        { id: 'stock-1', name: 'TXN', priceInfo: { pricePre: 0, priceCur: 0 } },
        { id: 'stock-2', name: 'AMD', priceInfo: { pricePre: 0, priceCur: 0 } },
        { id: 'stock-3', name: 'MSFT', priceInfo: { pricePre: 0, priceCur: 0 } },
        { id: 'stock-4', name: 'INTC', priceInfo: { pricePre: 0, priceCur: 0 } },
    ],
    reducers:{
        addStock:(state, action)=>{
            return state;
        },
        deleteStock:(state, action)=>{
            return state;
        },
        editStock: (state, action)=>{
            return state;
        }
    }
});

export const {addStock, deleteStock, editStock} = stockSlice.actions;

export const selectStock = state=>state.stock;

export default stockSlice.reducer;