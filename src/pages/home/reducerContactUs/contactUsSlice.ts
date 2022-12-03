import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IStateContacts {
  error: string
  isLoading: boolean
  contactUs: IContactUs
}

interface IContactUs{
    id: number
    email: string
    full_name: string
    message: string
}

export const initialState = {
  error: '',
  isLoading: false,
  contactUs: {},
} as IStateContacts

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    ContactUsFetching(state) {
      state.isLoading = true
    },
    ContactUsSuccess(state, action: PayloadAction<IContactUs>) {
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
