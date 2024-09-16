import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  error: string
  checkout: ICheckout
  isLoading: boolean
}

export interface ICheckout {
  first_name: string
  last_name: string
  company_name: string
  phone: number
  email: string
  country: string
  street_address: string
  house: string
  order_notes: string
}

export const initialState = {
  error: '',
  checkout: {},
  isLoading: false,
} as IState

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutFetching(state) {
      state.isLoading = true
    },
    checkoutSuccess(state, action: PayloadAction<ICheckout>) {
      state.isLoading = false
      state.checkout = action.payload
    },
    checkoutError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
  },
})

export default checkoutSlice.reducer
