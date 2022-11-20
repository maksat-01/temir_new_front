import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ContactReducer } from "./ReducerContact";

export const getActionBankCard = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ContactReducer.actions.BankCardFetching);
    const response = await API(`bank-cart/`);
    console.log(response, "RES");
    dispatch(ContactReducer.actions.BankCardSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ContactReducer.actions.BankCardError(e.massage));
  }
};
