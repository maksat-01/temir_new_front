import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { CompanyAdminInformationReducer } from "./ReducerCompanyInformation";

export const getActionCompanyInformationAdmin =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(
        CompanyAdminInformationReducer.actions.CompanyAdminInformationFetching
      );
      const response = await API(`company/${id}`);
      dispatch(
        CompanyAdminInformationReducer.actions.CompanyAdminInformationSuccess(
          response.data
        )
      );
    } catch (e: any) {
      dispatch(
        CompanyAdminInformationReducer.actions.CompanyAdminInformationError(
          e.massage
        )
      );
    }
  };
