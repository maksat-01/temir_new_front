import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ImageReducer } from "./ReducerImage";

export const getActionImage = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ImageReducer.actions.PhotosFetching);
    const response = await API(`image/`);
    dispatch(ImageReducer.actions.PhotosSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ImageReducer.actions.PhotosError(e.massage));
  }
};
