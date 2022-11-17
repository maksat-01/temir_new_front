import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  description: string;
  image: string;
}

interface PhotosState {
  product: ImageTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: PhotosState = {
  error: "",
  isLoading: false,
  product: [],
} as PhotosState;

export const ProductReducer = createSlice({
  name: "Product",
  initialState,
  reducers: {
    ProductFetching(state) {
      state.isLoading = true;
    },
    ProductSuccess(state, action: PayloadAction<ImageTypes[]>) {
      state.isLoading = false;
      state.error = "";
      state.product = action.payload;
    },
    ProductError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ProductReducer.reducer;
