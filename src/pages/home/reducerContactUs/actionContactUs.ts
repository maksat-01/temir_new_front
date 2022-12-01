import { AppDispatch } from '../../../redux/Store'
import { contactUsSlice } from './contactUsSlice'
import API from '../../../components/api/Api'

export const fetchContactUs =
  (contact: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contactUsSlice.actions.ContactUsFetching)
      const contactUs = await API.post('api/v1/applicationpost-contact-us', {
        ...contact,
      })
        .then((res) => {
          alert('Success')
        })
        .catch((res) => {
          alert('Error')
        })
      dispatch(contactUsSlice.actions.ContactUsSuccess(contactUs))
    } catch (e: any) {
      dispatch(contactUsSlice.actions.ContactUsError(e.message))
    }
  }
