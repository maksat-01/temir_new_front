import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { PhoneNumbersReducer } from "./ReducerPhoneNumbersAdmin";

export const getActionPhoneNumbers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(PhoneNumbersReducer.actions.PhoneNumbersFetching);
    const response = await API(`phone/`);
    dispatch(
      PhoneNumbersReducer.actions.PhoneNumbersSuccess(response.data.results)
    );
  } catch (e: any) {
    dispatch(PhoneNumbersReducer.actions.PhoneNumbersError(e.massage));
  }
};
