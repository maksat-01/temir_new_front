import { AppDispatch } from '../../../redux/Store'
import { PUBLIC_API } from '../../../components/api/Api'
import { productDetailSlice } from './productDetailSlice'
export const fetchDetailProduct =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productDetailSlice.actions.detailProductFetching)
      const products = await PUBLIC_API.get(`api/v1/productproduct/${id}/`)
      console.log(products)
      dispatch(productDetailSlice.actions.detailProductSucces(products.data))
    } catch (e: any) {
      dispatch(productDetailSlice.actions.detailProductError(e.message))
    }
  }
