import React from 'react'

//local
import temir from '../../assets/img/temir.png'
import iphone from '../../assets/img/iphone.png'

const HomeHero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto hero">
        <div className="flex justify-center font-[Arial] flex-col items-center pt-20 lg:min-h-screen">
          <h1 className="temir_text text-white text-[100px] max-lg:text-[70px] max-md:text-[48px] text-center pt-10">
            Smart interface
          </h1>
          <ul className="flex w-[50%] max-xl:w-[56%] max-lg:w-[60%] max-sm:w-[80%] justify-between text-[24px] max-lg:text-[20px] max-md:text-[16px] mt-1 mb-5">
            <li className="text-li-1">• High quality products</li>
            <li className="text-li-2">• Convenient to use</li>
          </ul>
          <img src={temir} alt="img" className="temir-cart" />
          <img src={iphone} alt="img" className="" />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
