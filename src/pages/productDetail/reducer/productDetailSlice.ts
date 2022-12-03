import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  error: string
  isLoading: boolean
  detail_product: IPropductsDetail
}

interface IPropductsDetail {
  id: number
  name: string
  price: number
  is_available: boolean
  quantity: number
  image: string
  description: string
}

export const initialState = {
  error: '',
  isLoading: false,
  detail_product: {},
} as IState

export const productDetailSlice = createSlice({
  name: 'detail_product',
  initialState,
  reducers: {
    detailProductFetching(state) {
      state.isLoading = true
    },
    detailProductSucces(state, action: PayloadAction<IPropductsDetail>) {
      state.detail_product = action.payload
      state.isLoading = false
    },
    detailProductError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
  },
})

export default productDetailSlice.reducer
