import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState = {
  basket: JSON.parse(localStorage.getItem('basket') as any) || [],
  error: '',
  isLoading: false
} as any

export const ReducerBasket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basketFetching(state) {
      state.isLoading = true
    },
    basketSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.basket = JSON.parse(localStorage.getItem('basket') as any) || []
      state.basket = [...state.basket, action.payload]
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    basketError(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.error = action.payload
    },

    basketDelete(state, action: PayloadAction<any>){
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.filter((el: any,idx:number) => idx !== action.payload)
      state.basket = basket
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    },

    PlusTheNumber(state, action: PayloadAction<any>){
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.map((el:any, idx:number) => idx === action.payload ? {...el, quantity: el.quantity + 1} : el)
      state.basket = [...basket]
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    },

    MinusTheNumber(state, action: PayloadAction<any>){
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.map((el:any, idx:number) => idx === action.payload ? {...el, quantity: el.quantity > 1? el.quantity - 1 : el.quantity} : el)
      state.basket = [...basket]
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    }
  }
})

export default ReducerBasket.reducer