import API from '../../../components/api/Api'
import { AppDispatch } from '../../../redux/Store'
import { productSlice } from './productSlice'

export const getProductsPage = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productPagefetching)
    const products = await API.get('api/v1/productproduct/')
    dispatch(productSlice.actions.productPageSuccess(products.data.results))
  } catch (e: any) {
    dispatch(productSlice.actions.productPageError(e.message))
  }
}
