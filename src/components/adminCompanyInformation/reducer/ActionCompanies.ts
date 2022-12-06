import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { CompaniesAdminReducer } from "./ReducerCompanies";

export const getActionCompaniesAdmin = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(CompaniesAdminReducer.actions.CompaniesAdminFetching);
    const response = await API(`company/`);
    dispatch(
      CompaniesAdminReducer.actions.CompaniesAdminSuccess(response.data)
    );
  } catch (e: any) {
    dispatch(CompaniesAdminReducer.actions.CompaniesAdminError(e.massage));
  }
};
