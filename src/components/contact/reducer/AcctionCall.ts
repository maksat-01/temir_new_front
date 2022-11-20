import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ContactReducer } from "./ReducerContact";

export const getActionCall = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ContactReducer.actions.PhoneStateFetching);
    const response = await API(`client_part/phone/`);
    console.log(response, "P");
    dispatch(ContactReducer.actions.PhoneStateSuccess(response.data.results));
  } catch (e: any) {
    dispatch(ContactReducer.actions.PhoneStateError(e.massage));
  }
};
