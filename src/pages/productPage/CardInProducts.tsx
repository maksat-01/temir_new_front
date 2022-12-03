import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

//local
import { useAppDispatch, useAppSelector } from '../../hooks/index'
import { getProductsPage } from './reducer/actionProductPage'

const CardInProducts: FC = () => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.productSlice.products_page)
  useEffect(() => {
    dispatch(getProductsPage())
  }, [dispatch])
  return (
    <section>
      <div className="container mx-auto py-4">
        <div className="flex justify-between w-full">
          {product.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="bg-[#181818] products w-[60%] h-[350px] shadow-[0px_11.8962px_17.8444px_rgba(0,0,0,0.15)] px-4 pt-8 pb-4"
            >
              <img src={el.image} alt="img" className="w-[200px]" />
              <h1 className="text-white text-center font-[Arial] font-[700] text-[24px] leading-[28px] uppercase mt-10">
                {el.name}
              </h1>
              <p className="text-white text-center font-[Arial] font-[700] text-[16px] leading-[18px] uppercase my-5">
                {el.price} AED
              </p>
              <div className="flex justify-center items-center">
                <Link to={`/productDetail/${el.id}`}>
                  <button className="bg-[#0B0B0B] px-8 py-3 font-[Jura] hover:bg-transparent hover:scale-[1.1] transition ease-linear text-[24px] leading-[28px] rounded-[4.9px] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000]">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardInProducts
