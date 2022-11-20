/* External dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReducerImage from "../components/media/reducer/ReducerImage";
import ReducerVideo from "../components/media/reducer/ReducerVideo";
import ReducerProduct from "../components/products/reducer/ReducerProduct";
import ReducerContact from "../components/contact/reducer/ReducerContact";
import ReducerCompany from "../components/compony/reducer/ReducerCompany";
import ReducerCompanyDetails from "../components/compony/reducer/ReducerCompanyDetails";

const rootReducer = combineReducers({
  ReducerImage,
  ReducerVideo,
  ReducerProduct,
  ReducerContact,
  ReducerCompany,
  ReducerCompanyDetails,
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
