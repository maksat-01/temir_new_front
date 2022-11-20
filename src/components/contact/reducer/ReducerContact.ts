import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BankAccountTypes,
  BankCartTypes,
  EmailTypes,
  PhoneUserTypes,
} from "../../../redux/Types";

interface ContactState {
  bankAcc: BankAccountTypes[];
  bankCart: BankCartTypes[];
  email: EmailTypes[];
  phone: PhoneUserTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: ContactState = {
  error: "",
  isLoading: false,
  email: [],
  bankAcc: [],
  bankCart: [],
} as unknown as ContactState;

export const ContactReducer = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    // Email
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

    // // Bank account
    BankAccountFetching(state) {
      state.isLoading = true;
    },
    BankAccountSuccess(state, action: PayloadAction<BankAccountTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.bankAcc = action.payload;
    },
    BankAccountError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // //Bank cart
    BankCardFetching(state) {
      state.isLoading = true;
    },
    BankCardSuccess(state, action: PayloadAction<BankCartTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.bankCart = action.payload;
    },
    BankCardError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // //Phone number
    PhoneStateFetching(state) {
      state.isLoading = true;
    },
    PhoneStateSuccess(state, action: PayloadAction<PhoneUserTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.phone = action.payload;
    },
    PhoneStateError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ContactReducer.reducer;
