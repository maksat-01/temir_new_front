import { AppDispatch } from '../../../redux/Store'
import { contactUsSlice } from './contactUsSlice'
import { PUBLIC_API } from '../../../components/api/Api'

export const fetchContactUs =
  (contact: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contactUsSlice.actions.ContactUsFetching)
      const contactUs = await PUBLIC_API.post(
        'api/v1/applicationpost-contact-us',
        {
          ...contact,
        }
      )
      alert(contactUs.data)
      dispatch(contactUsSlice.actions.ContactUsSuccess(contactUs.data))
    } catch (e: any) {
      dispatch(contactUsSlice.actions.ContactUsError(e.message))
    }
  }
