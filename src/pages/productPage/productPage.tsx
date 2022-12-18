import React, { FC, useState, useEffect } from 'react'

//local
import Loading from '../../components/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getProductsPage } from './reducer/actionProductPage'
import CardInProducts from './CardInProducts'

const ProductPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.productSlice.products_page)
  useEffect(() => {
    dispatch(getProductsPage())
    setLoading(false)
  }, [dispatch])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardInProducts product={product} />
        </>
      )}
    </>
  )
}

export default ProductPage
