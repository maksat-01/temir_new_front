import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { SocialsReducer } from "./ReducerSocials";

export const getActionSocails = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(SocialsReducer.actions.SocialsFetching);
    const response = await API(`social/`);
    dispatch(SocialsReducer.actions.SocialsSuccess(response.data.results));
  } catch (e: any) {
    dispatch(SocialsReducer.actions.SocialsError(e.massage));
  }
};
