/* External dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ReducerImage from "../components/media/reducer/ReducerImage";
import ReducerVideo from "../components/media/reducer/ReducerVideo";
import ReducerProduct from "../components/products/reducer/ReducerProduct";
import ReducerContact from "../components/contact/reducer/ReducerContact";
import ReducerCompany from "../components/compony/reducer/ReducerCompany";
import ReducerCompanyDetails from "../components/compony/reducer/ReducerCompanyDetails";
import ReducerBasket from "../pages/basket/ReducerBasket/BasketSlice";
import ReducerMediaImage from "../components/adminMedia/reducer/ReducerMediaImage";
import ReducerMediaVideo from "../components/adminMedia/reducer/ReucerMediaVideo";
import ReducerAdminProduct from "../components/adminProduct/reducer/ReducerAdminProduct";
import contactUsSlice from "../pages/home/reducerContactUs/contactUsSlice";
// import getUser from "../pages/interface/getUser/redux/reducer"
import getUser from "./../pages/interface/getUser/redux/reducer";
import PhoneNumbersReducer from "../components/adminContact/reducer/ReducerPhoneNumbersAdmin";
import EmailReducer from "../components/adminEmail/reducer/ReducerAdminEmail";
import SocialsReducer from "../components/adminSocial/reducer/ReducerSocials";
import SocialReducer from "../components/adminSocial/reducer/ReduceSocialId";
import contactUsSlice from "../pages/home/reducerContactUs/contactUsSlice";
import productSlice from "../pages/productPage/reducer/productSlice";
import productDetailSlice from "../pages/productDetail/reducer/productDetailSlice";
import ReducerCompanies from "../components/adminCompanyInformation/reducer/ReducerCompanies";
import ReducerCompanyInformation from "../components/adminCompanyInformation/reducer/ReducerCompanyInformation";
import ReducerFollow from "../components/adminFollowMe/reducer/ReducerFollow";
import ReducerFollows from "../components/adminFollowMe/reducer/ReducerFollows";
import productSlice from '../pages/productPage/reducer/productSlice';
import productDetailSlice from '../pages/productDetail/reducer/productDetailSlice';

const rootReducer = combineReducers({
  ReducerImage,
  ReducerVideo,
  ReducerProduct,
  ReducerContact,
  ReducerCompany,
  ReducerCompanyDetails,
  ReducerBasket,
  ReducerMediaImage,
  ReducerMediaVideo,
  ReducerAdminProduct,
  contactUsSlice,
  getUser,
  PhoneNumbersReducer,
  EmailReducer,
  SocialsReducer,
  SocialReducer,
  productSlice,
  productDetailSlice,
  ReducerCompanyInformation,
  ReducerFollow,
  ReducerFollows,
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
