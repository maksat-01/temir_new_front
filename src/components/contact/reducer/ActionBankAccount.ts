import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ContactReducer } from "./ReducerContact";

export const getActionBankAccount = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ContactReducer.actions.BankAccountFetching);
    const response = await API(`bank-account/`);
    dispatch(ContactReducer.actions.BankAccountSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ContactReducer.actions.BankAccountError(e.massage));
  }
};
