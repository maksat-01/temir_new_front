import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export const initialState = {
  error: '',
  isLoading: false,
  contactUs: {},
}

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    ContactUsFetching(state) {
      state.isLoading = true
    },
    ContactUsSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.contactUs = action.payload
    },
    ContactUsError(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default contactUsSlice.reducer
