import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompanyDetailsTypes {
  id?: string;
  user?: string;
  name?: string;
  activity?: string;
  description?: string;
  visit_website_url?: string;
  address_url?: string;
  is_main?: boolean;
  image?: string;
}

interface CompanyDetailsState {
  details: CompanyDetailsTypes;
  error: string;
  isLoading?: boolean;
}

export const initialState: CompanyDetailsState = {
  error: "",
  details: {},
  isLoading: false,
};

export const CompanyDetailsReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {
    CompanyDetailsFetching(state) {
      state.isLoading = true;
    },
    CompanyDetailsSuccess(state, action: PayloadAction<CompanyDetailsTypes>) {
      state.isLoading = false;
      state.error = "";
      state.details = action.payload;
    },
    CompanyDetailsError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default CompanyDetailsReducer.reducer;
