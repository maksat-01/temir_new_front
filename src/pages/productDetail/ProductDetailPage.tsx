import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//local
import Loading from '../../components/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchDetailProduct } from './reducer/actionDetailPage'
import CardsPremimum from './component/CardsPremimum'
import WhatsappInfo from './component/WhatsappInfo'

const ProductDetailPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const { idCard } = useParams()
  const productOne = useAppSelector(
    (state) => state.productDetailSlice.detail_product
  )
  useEffect(() => {
    dispatch(fetchDetailProduct(idCard))
    setLoading(false)
  }, [idCard, dispatch])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardsPremimum productOne={productOne} />
          <WhatsappInfo />
        </>
      )}
    </>
  )
}

export default ProductDetailPage
