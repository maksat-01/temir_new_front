import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductAdminTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  description: string;
  image: string;
}

interface ProductAdminState {
  product: ProductAdminTypes;
  error: string;
  isLoading: boolean;
}

export const initialState: ProductAdminState = {
  error: "",
  isLoading: true,
  product: {},
} as ProductAdminState;

export const ProductAdminReducer = createSlice({
  name: "Product",
  initialState,
  reducers: {
    ProductAdminFetching(state) {
      state.isLoading = true;
    },
    ProductAdminSuccess(state, action: PayloadAction<ProductAdminTypes>) {
      state.isLoading = false;
      state.error = "";
      state.product = action.payload;
    },
    ProductAdminError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ProductAdminReducer.reducer;
