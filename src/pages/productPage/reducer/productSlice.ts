import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  products_page: IProductPage[]
  isLoading: boolean
  error: string
}

export interface IProductPage {
  id: number
  name: string
  price: number
  is_available: boolean
  quantity: number
  image: string
  description: string
}

export const initialState = {
  products_page: [],
  isLoading: false,
  error: '',
} as IState

export const productSlice = createSlice({
  name: 'products_page',
  initialState,
  reducers: {
    productPagefetching(state) {
      state.isLoading = true
      state.products_page = []
    },
    productPageSuccess(state, action: PayloadAction<IProductPage[]>) {
      state.products_page = action.payload
      state.isLoading = false
    },
    productPageError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
  },
})

export default productSlice.reducer
