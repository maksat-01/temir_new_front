import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  basket: any[]
  defaultCard: any
  error: string
  isLoading: boolean
}

export const initialState = {
  basket: JSON.parse(localStorage.getItem('basket') as any) || [],
  defaultCard: JSON.parse(localStorage.getItem('defaultCard') as any) || {},
  error: '',
  isLoading: false,
} as IState

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

    basketDelete(state, action: PayloadAction<any>) {
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.filter((el: any, idx: number) => idx !== action.payload)
      state.basket = basket
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    },

    PlusTheNumber(state, action: PayloadAction<any>) {
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.map((el: any, idx: number) =>
        idx === action.payload ? { ...el, quantityCard: el.quantityCard + 1 } : el
      )
      state.basket = [...basket]
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    },

    MinusTheNumber(state, action: PayloadAction<any>) {
      let basket = JSON.parse(localStorage.getItem('basket') as any) || []
      basket = basket.map((el: any, idx: number) =>
        idx === action.payload
          ? { ...el, quantityCard: el.quantityCard > 1 ? el.quantityCard - 1 : el.quantityCard }
          : el
      )
      state.basket = [...basket]
      localStorage.setItem('basket', JSON.stringify(basket) as any)
    },

    DefaultCard(state, action: PayloadAction<any>){
      let defCard = JSON.parse(localStorage.getItem("defaultCard") as any) || {}
      defCard = {...action.payload}
      state.defaultCard = defCard
      localStorage.setItem("defaultCard", JSON.stringify(defCard) as any)
    }
  },
})

export default ReducerBasket.reducer
