import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//local
import Loading from '../../components/loading/Loading'
import { useAppSelector } from '../../hooks'
import BasketCard from './BasketCard'
import BasketEmpty from './BasketEmpty'
import BasketTotal from './BasketTotal'
import BaskTitle from './BaskTitle'

const Basket: FC = () => {
  const ClassesBtn =
    'font-[Jura] text-[30px] bg-[#0B0B0B] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000] rounded-[5px] py-2 px-8 hover:scale-110 hover:bg-transparent transition duration-500 ease-in-out'
  const navigate = useNavigate()
  const returnProduct = () => {
    navigate('/products')
  }
  const proceedCheckout = () => {
    navigate('/checkout')
  }
  const { basket } = useAppSelector((s) => s.ReducerBasket)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="pt-16">
          <div className="lg:w-[80%] max-lg:w-[90%] mx-auto pt-10 pb-6">
            <div className="bg-[#161616] rounded-[10px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] pb-10">
              <h1 className="font-[Arial] pt-6 pb-3 font-[900] text-[30px] leading-[42px] tracking-widest text-center">
                Cart
              </h1>
              <div>
                {basket.length > 0 && <BaskTitle />}
                <div className="relative w-full py-2">
                  <div className="before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"></div>
                  <div>
                    {basket.length ? (
                      basket.map((el: any, idx: number) => (
                        <BasketCard el={el} key={idx} idx={idx} />
                      ))
                    ) : (
                      <BasketEmpty />
                    )}
                  </div>
                  {basket.length > 0 && <BasketTotal />}
                </div>
              </div>
              <div className="flex justify-center items-center py-3 mt-1">
                {basket.length > 0 ? (
                  <button className={`${ClassesBtn}`} onClick={proceedCheckout}>
                    Proceed to checkout
                  </button>
                ) : (
                  <button className={`${ClassesBtn}`} onClick={returnProduct}>
                    Return to products
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Basket
