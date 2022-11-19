import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyTypes {
  id: string;
  user: string;
  name: string;
  activity: string;
  description: string;
  visit_website_url: string;
  adress_url: string;
  is_main: boolean;
  image: string;
}

interface CompanyState {
  company: CompanyTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: CompanyState = {
  error: "",
  isLoading: false,
  company: [],
};

export const CompanyReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {
    CompanyFetching(state) {
      state.isLoading = true;
    },
    CompanySuccess(state, action: PayloadAction<CompanyTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.company = action.payload;
    },
    CompanyError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default CompanyReducer.reducer;
