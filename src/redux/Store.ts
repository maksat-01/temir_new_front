/* External dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReducerImage from "../components/media/reducer/ReducerImage";
import ReducerVideo from "../components/media/reducer/ReducerVideo";
import ReducerProduct from "../components/products/reducer/ReducerProduct";

const rootReducer = combineReducers({
  ReducerImage,
  ReducerVideo,
  ReducerProduct,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
