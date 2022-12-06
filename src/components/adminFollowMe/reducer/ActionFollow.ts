import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { FollowReducer } from "./ReducerFollow";

export const getActionFollow = (id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(FollowReducer.actions.FollowFetching);
    const response = await API(`messanger/${id}`);
    dispatch(FollowReducer.actions.FollowSuccess(response.data.results));
  } catch (e: any) {
    dispatch(FollowReducer.actions.FollowError(e.massage));
  }
};
