import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { CompanyDetailsReducer } from "./ReducerCompanyDetails";

export const getActionCompanyDetails =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(CompanyDetailsReducer.actions.CompanyDetailsFetching);
      const response = await API.get(`company/${id}`);
      dispatch(
        CompanyDetailsReducer.actions.CompanyDetailsSuccess(response.data)
      );
    } catch (e: any) {
      dispatch(CompanyDetailsReducer.actions.CompanyDetailsError(e.massage));
    }
  };
