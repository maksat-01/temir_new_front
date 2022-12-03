import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { SocialReducer } from "./ReduceSocialId";

export const getActionSocailId = (id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(SocialReducer.actions.SocialFetching);
    const response = await API(`social/${id}`);
    dispatch(SocialReducer.actions.SocialSuccess(response.data));
  } catch (e: any) {
    dispatch(SocialReducer.actions.SocialError(e.massage));
  }
};
