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
  photos: ImageTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: PhotosState = {
  error: "",
  isLoading: false,
  photos: [],
} as PhotosState;

export const ImageReducer = createSlice({
  name: "Image",
  initialState,
  reducers: {
    PhotosFetching(state) {
      state.isLoading = true;
    },
    PhotosSuccess(state, action: PayloadAction<ImageTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.photos = action.payload;
    },
    PhotosError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ImageReducer.reducer;
