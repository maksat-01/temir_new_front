import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  description: string;
  image: string;
  visit_website_url_name: string;
  visit_website_url_url: string;
}

interface PhotosState {
  products: ImageTypes[];
  error: string;
  isLoading: boolean;
}

export const initialState: PhotosState = {
  error: "",
  isLoading: false,
  products: [],
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
      state.products = action.payload;
    },
    ProductError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ProductReducer.reducer;
