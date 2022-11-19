import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { CompanyReducer } from "./ReducerCompany";

export const getActionCompany = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(CompanyReducer.actions.CompanyFetching);
    const response = await API(`client_part/company/`);
    dispatch(CompanyReducer.actions.CompanySuccess(response.data.results));
  } catch (e: any) {
    dispatch(CompanyReducer.actions.CompanyError(e.massage));
  }
};
