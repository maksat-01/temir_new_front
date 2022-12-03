import { createSlice } from "@reduxjs/toolkit";

interface UserReducerTypes {
  user?: any;
  loading: boolean;
  error?: Error;
  isSuccess?: boolean;
}

const initialState: UserReducerTypes = {
  user: {},
  loading: false,
};

export const getUser = createSlice({
  name: "getUser",
  initialState,
  reducers: {
    getUser({ loading }, action) {
      loading = true;
    },

    getUserSucceseded(state, action: any) {
      state.loading = false;
      state.user = action.payload;
      state.isSuccess = true;
    },

    getUserError(state, action: any) {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    },
  },
});

export default getUser.reducer;
