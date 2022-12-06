import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompaniesAdminTypes {
  id: string;
  user: string;
  name: string;
  activity: string;
  description: string;
  title: string;
  visit_website_url: string;
  address_url: string;
  is_main: string;
}

interface CompaniesAdminState {
  companies: CompaniesAdminTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: CompaniesAdminState = {
  error: "",
  isLoading: false,
  companies: {},
} as CompaniesAdminState;

export const CompaniesAdminReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {
    CompaniesAdminFetching(state) {
      state.isLoading = true;
    },
    CompaniesAdminSuccess(state, action: PayloadAction<CompaniesAdminTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.companies = action.payload;
    },
    CompaniesAdminError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default CompaniesAdminReducer.reducer;
