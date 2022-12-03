import { AppDispatch } from '../../../redux/Store'
import { PUBLIC_API } from '../../../components/api/Api'
import { checkoutSlice } from './checkoutSlice'

export const postChechout =
  (checkout: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(checkoutSlice.actions.checkoutFetching)
      const dataChechout = await PUBLIC_API.post(
        'api/v1/applicationpost-checkout',
        { ...checkout }
      )
      dispatch(checkoutSlice.actions.checkoutSuccess(dataChechout.data))
    } catch (e: any) {
      dispatch(checkoutSlice.actions.checkoutError(e.message))
    }
  }
