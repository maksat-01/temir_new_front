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
  socialId: SocialTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: SocialState = {
  error: "",
  isLoading: true,
  socialId: {},
} as SocialState;

export const SocialReducer = createSlice({
  name: "Social",
  initialState,
  reducers: {
    SocialFetching(state) {
      state.isLoading = true;
    },
    SocialSuccess(state, action: PayloadAction<SocialTypes>) {
      state.isLoading = false;
      state.error = "";
      state.socialId = action.payload;
    },
    SocialError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default SocialReducer.reducer;
