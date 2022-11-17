import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ProductReducer } from "./ReducerProduct";

export const getActionProduct = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ProductReducer.actions.ProductFetching);
    const response = await API(`product/`);
    dispatch(ProductReducer.actions.ProductSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ProductReducer.actions.ProductError(e.massage));
  }
};
