import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { EmailReducer } from "./ReducerAdminEmail";

export const getActionEmail = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(EmailReducer.actions.EmailFetching);
    const response = await API(`email/`);
    dispatch(EmailReducer.actions.EmailSuccess(response.data.results));
  } catch (e: any) {
    dispatch(EmailReducer.actions.EmailError(e.massage));
  }
};
