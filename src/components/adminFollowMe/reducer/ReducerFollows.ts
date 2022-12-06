import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FollowsTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  url: string;
  messenger: string;
}

interface FollowsState {
  folows: FollowsTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: FollowsState = {
  error: "",
  isLoading: false,
  folows: [],
} as FollowsState;

export const FollowsReducer = createSlice({
  name: "E-mail",
  initialState,
  reducers: {
    FollowsFetching(state) {
      state.isLoading = true;
    },
    FollowsSuccess(state, action: PayloadAction<FollowsTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.folows = action.payload;
    },
    FollowsError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default FollowsReducer.reducer;
