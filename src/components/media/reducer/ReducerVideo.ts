import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViedoTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  url: string;
}

interface VideoState {
  video: ViedoTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: VideoState = {
  error: "",
  isLoading: false,
  video: [],
};

export const VideoReducer = createSlice({
  name: "Video",
  initialState,
  reducers: {
    VideoFetching(state) {
      state.isLoading = true;
    },
    VideoSuccess(state, action: PayloadAction<ViedoTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.video = action.payload;
    },
    VideoError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default VideoReducer.reducer;
