import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { VideoMediaReducer } from "./ReucerMediaVideo";

export const getActionMediaVideo =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(VideoMediaReducer.actions.VideoMediaFetching);
      const response = await API(`video/${id}`);
      dispatch(VideoMediaReducer.actions.VideoMediaSuccess(response.data));
    } catch (e: any) {
      dispatch(VideoMediaReducer.actions.VideoMediaError(e.massage));
    }
  };
