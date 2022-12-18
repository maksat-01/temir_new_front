import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  url: string;
  social: string;
}

interface SocialState {
  socials: SocialTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: SocialState = {
  error: "",
  isLoading: true,
  socials: [],
} as SocialState;

export const SocialsReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    SocialsFetching(state) {
      state.isLoading = true;
    },
    SocialsSuccess(state, action: PayloadAction<SocialTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.socials = action.payload;
    },
    SocialsError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default SocialsReducer.reducer;
