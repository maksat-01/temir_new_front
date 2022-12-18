import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmailTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  email: string;
}

interface EmailState {
  email: EmailTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: EmailState = {
  error: "",
  isLoading: true,
  email: [],
} as EmailState;

export const EmailReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    EmailFetching(state) {
      state.isLoading = true;
    },
    EmailSuccess(state, action: PayloadAction<EmailTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.email = action.payload;
    },
    EmailError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default EmailReducer.reducer;
