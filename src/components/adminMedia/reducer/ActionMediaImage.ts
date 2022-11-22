import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ImageMediaReducer } from "./ReducerMediaImage";

export const getActionMediaImage =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ImageMediaReducer.actions.imageMediaFetching);
      const response = await API(`image/${id}`);
      dispatch(ImageMediaReducer.actions.imageMediaSuccess(response.data));
    } catch (e: any) {
      dispatch(ImageMediaReducer.actions.imageMediaError(e.massage));
    }
  };
