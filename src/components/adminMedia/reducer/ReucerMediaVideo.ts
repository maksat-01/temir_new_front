import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoAdminTypes {
  id?: string;
  created_at?: string;
  updated_at?: string;
  url: string;
  user: string;
  title: string;
}

interface VideoAdminState {
  video: VideoAdminTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: VideoAdminState = {
  error: "",
  isLoading: false,
  video: {},
} as VideoAdminState;

export const VideoMediaReducer = createSlice({
  name: "Video",
  initialState,
  reducers: {
    VideoMediaFetching(state) {
      state.isLoading = true;
    },
    VideoMediaSuccess(state, action: PayloadAction<VideoAdminTypes>) {
      state.isLoading = false;
      state.error = "";
      state.video = action.payload;
    },
    VideoMediaError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default VideoMediaReducer.reducer;
