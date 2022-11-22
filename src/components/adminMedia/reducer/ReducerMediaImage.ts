import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageTypes {
  created_at: string;
  image: string;
  id: string;
  is_avatar: string;
  is_background: string;
  user: string;
  updated_at: string;
  title: string;
}

interface PhotosState {
  photos: ImageTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: PhotosState = {
  error: "",
  isLoading: false,
  photos: {},
} as PhotosState;

export const ImageMediaReducer = createSlice({
  name: "Image",
  initialState,
  reducers: {
    imageMediaFetching(state) {
      state.isLoading = true;
    },
    imageMediaSuccess(state, action: PayloadAction<ImageTypes>) {
      state.isLoading = false;
      state.error = "";
      state.photos = action.payload;
    },
    imageMediaError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ImageMediaReducer.reducer;
