import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FollowTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  url: string;
  messenger: string;
}

interface FollowState {
  folow: FollowTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: FollowState = {
  error: "",
  isLoading: true,
  folow: {},
} as FollowState;

export const FollowReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    FollowFetching(state) {
      state.isLoading = true;
    },
    FollowSuccess(state, action: PayloadAction<FollowTypes>) {
      state.isLoading = false;
      state.error = "";
      state.folow = action.payload;
    },
    FollowError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default FollowReducer.reducer;
