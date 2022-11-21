import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const CardInProducts: FC = () => {
  const cardClases = 'w-[335px] h-[212px] bg-white rounded-[20px]'
  const cardArray = [
    {
      id: 1,
      text: 'Premium Smart Card',
      price: '200 AED',
    },
    {
      id: 2,
      text: 'Premium Smart Card',
      price: '200 AED',
    },
    {
      id: 3,
      text: 'Premium Smart Card',
      price: '200 AED',
    },
    {
      id: 4,
      text: 'Premium Smart Card',
      price: '200 AED',
    },
  ]
  return (
    <section>
      <div className="container mx-auto py-4">
        <div className="flex justify-between w-full">
          {cardArray.map((el, idx) => (
            <Link to={`/productDetail/${el.id}`}>
              <div
                key={idx}
                className="bg-[#181818] w-[60%] hover:w-[100%] h-[350px] shadow-[0px_11.8962px_17.8444px_rgba(0,0,0,0.15)] px-4 pt-8 pb-4 overflow-hidden relative "
              >
                <div
                  className={`${cardClases} flex justify-center items-center absolute top-0 left-0 transition`}
                >
                  <p className="text-black text-[40px] font-[600]">TEMIR</p>
                </div>
                <h1 className="text-white text-center font-[Arial] font-[700] text-[24px] leading-[28px] uppercase mt-10">
                  {el.text}
                </h1>
                <p className="text-white text-center font-[Arial] font-[700] text-[16px] leading-[18px] uppercase my-5">
                  {el.price}
                </p>
                <div className="flex justify-center items-center">
                  <button className="bg-[#0B0B0B] px-8 py-3 font-[Jura] text-[24px] leading-[28px] rounded-[4.9px] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000]">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardInProducts
