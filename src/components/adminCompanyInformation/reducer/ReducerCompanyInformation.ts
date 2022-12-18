import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyAdminTypes {
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

interface CompanyAdminState {
  company: CompanyAdminTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: CompanyAdminState = {
  error: "",
  isLoading: true,
  company: {},
} as CompanyAdminState;

export const CompanyAdminInformationReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {
    CompanyAdminInformationFetching(state) {
      state.isLoading = true;
    },
    CompanyAdminInformationSuccess(
      state,
      action: PayloadAction<CompanyAdminTypes>
    ) {
      state.isLoading = false;
      state.error = "";
      state.company = action.payload;
    },
    CompanyAdminInformationError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default CompanyAdminInformationReducer.reducer;
