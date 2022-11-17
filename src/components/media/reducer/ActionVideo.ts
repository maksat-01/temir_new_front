import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { VideoReducer } from "./ReducerVideo";

export const getActionVideo = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(VideoReducer.actions.VideoFetching);
    const response = await API(`video/`);
    dispatch(VideoReducer.actions.VideoSuccess(response.data.results));
  } catch (e: any) {
    dispatch(VideoReducer.actions.VideoError(e.massage));
  }
};
