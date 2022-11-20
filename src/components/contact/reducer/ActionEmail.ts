import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ContactReducer } from "./ReducerContact";

export const getActionEmail = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ContactReducer.actions.EmailFetching);
    const response = await API(`email/`);
    dispatch(ContactReducer.actions.EmailSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ContactReducer.actions.EmailError(e.massage));
  }
};
