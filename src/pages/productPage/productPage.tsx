import React, { FC, useState, useEffect } from 'react'

//local
import Loading from '../../components/loading/Loading'
import CardInProducts from './CardInProducts'

const ProductPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardInProducts />
        </>
      )}
    </>
  )
}

export default ProductPage
