import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { FollowsReducer } from "./ReducerFollows";

export const getActionFollows = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(FollowsReducer.actions.FollowsFetching);
    const response = await API(`social/`);
    dispatch(FollowsReducer.actions.FollowsSuccess(response.data.results));
  } catch (e: any) {
    dispatch(FollowsReducer.actions.FollowsError(e.massage));
  }
};
