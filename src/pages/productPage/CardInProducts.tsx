import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

//local
import '../../style/products/products.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/index'
import { getProductsPage } from './reducer/actionProductPage'
import CardSmarty from '../../assets/img/card2.svg'
import CardPrem from '../../assets/img/card7.svg'
import Card from '../../assets/img/card4.svg'
import cardgg from '../../assets/img/card6.svg'

const CardInProducts: FC = () => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.productSlice.products_page)
  console.log(product)
  const option = [
    {
      id: 1,
      name: 'Premium smart card',
      image: CardSmarty,
      price: 200,
    },
    {
      id: 2,
      name: 'Premium smart card',
      image: CardPrem,
      price: 200,
    },
    {
      id: 3,
      name: 'Premium smart card',
      image: cardgg,
      price: 200,
    },
    {
      id: 4,
      name: 'Premium smart card',
      image: Card,
      price: 200,
    },
    {
      id: 5,
      name: 'Premium smart card',
      image: Card,
      price: 200,
    },
  ]
  useEffect(() => {
    dispatch(getProductsPage())
  }, [dispatch])
  return (
    <section
      id="products"
      className="py-10 lg:bg-[#1E1E1E] max-lg:pt-10 max-lg:pb-0"
    >
      <div className="container mx-auto pt-20">
        <div className="flex cards lg:justify-between max-lg:flex-wrap max-lg:justify-center w-full bg-black py-12 px-16 max-lg:px-1 max-lg:py-6">
          {option.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="products bg-[#181818] relative flex flex-col overflow-hidden h-[456px] mx-2 max-lg:my-2 max-lg:rounded-[16px] max-lg:w-[45%] max-md:w-[60%] max-sm:w-[320px] max-xl:h-[420px] max-lg:h-[100%] cursor-pointer shadow-[0px_11.8962px_17.8444px_rgba(0,0,0,0.15)] px-2 pt-4 pb-1 max-lg:pb-6"
            >
              <div className="image flex justify-center items-center">
                <img
                  src={el.image}
                  alt="img"
                  className="lg:w-[350px] max-lg:w-[100%] max-xl:top-[35%] max-lg:h-[200px]"
                />
              </div>
              <div className="flex flex-col justify-end items-center add_cart xl:w-[350px] max-lg:sticky ">
                <h1 className="text-white text-center font-[Arial] font-[700] text-[24px] leading-[28px] xl:text-[22px] xl:leading-[22px] uppercase lg:mt-10 max-lg:mt-2">
                  {el.name}
                </h1>
                <p className="text-white text-center font-[Arial] font-[700] text-[16px] leading-[18px] xl:text-[16px] xl:leading-[14px] uppercase lg:my-5 max-lg:my-2 max-md:my-6">
                  {el.price} AED
                </p>
                <div className="flex justify-center items-center">
                  <Link to={`/productDetail/${el.id}`}>
                    <button className="bg-[#0B0B0B] px-8 py-3 font-[Jura] hover:bg-transparent hover:scale-[1.1] transition ease-linear text-[24px] xl:text-[22px] leading-[28px] rounded-[4.9px] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000]">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardInProducts
