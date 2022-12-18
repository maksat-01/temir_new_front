import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhoneNumbersTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  phone_number: string;
}

interface PhoneNumbersState {
  phone: PhoneNumbersTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: PhoneNumbersState = {
  error: "",
  isLoading: true,
  phone: [],
} as PhoneNumbersState;

export const PhoneNumbersReducer = createSlice({
  name: "PhoneNambers",
  initialState,
  reducers: {
    PhoneNumbersFetching(state) {
      state.isLoading = true;
    },
    PhoneNumbersSuccess(state, action: PayloadAction<PhoneNumbersTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.phone = action.payload;
    },
    PhoneNumbersError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default PhoneNumbersReducer.reducer;
