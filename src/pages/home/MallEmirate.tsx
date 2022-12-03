import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowRight, HiOutlineChevronLeft } from 'react-icons/hi'

//local
import MallEmiratePng from '../../assets/img/MallEmirateBg.png'

const MallEmirate: FC = () => {
  const [more, setMore] = useState(false)
  const navigate = useNavigate()
  const backgroundImageStyle = {
    backgroundImage: `url("${MallEmiratePng}")`,
  }
  const openInfo = () => {
    setMore(!more)
  }
  const navProducts = () => {
    navigate('/products')
  }
  const navContacts =()=>{
    navigate('/contact')
  }
  const cardCenter =
    'w-[100vw] h-[100vh] ease-in transition absolute top-0 overflow-hidden flex flex-col justify-center'
  const cardItemBlur =
    'lg:w-[50%] max-lg:w-[60%] md:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-[553px] max-sm:h-[500px] transition backdrop-blur-md rounded-t-[40px] px-4 rounded-b-[40px] rounded-l-none shadow-[7px_9px_9px_rgba(0,0,0,0.55)] bg-[rgba(48,48,48,0.02) flex items-center flex-col justify-center'
  const cardInfoBlur =
    'lg:w-[50%] max-lg:w-[60%] md:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-[553px] bg-[rgba(0,0,0,0.63)] shadow-[-11px_0px_20px_rgba(0,0,0,0.29)] backdrop-blur-[15px] rounded-t-[40px] p-6 rounded-b-[40px] rounded-r-none transition-all'
  const cardMore = {
    mall: (
      <div
        className={`${cardCenter} left-0 ${
          more ? 'translate-x-[-120%]' : 'translate-x-[0]'
        }`}
      >
        <div className={`${cardItemBlur}`}>
          <h1 className="text-white text-[60px] leading-[65px] max-lg:text-[40px] max-sm:text-[30px] max-sm:leading-[40px] font-[Arial] font-[900] text-center">
            Visit us at our store in the <br />
            <span className="text-[70px] max-lg:text-[55px] max-sm:text-[40px]">
              Mall of Emirate
            </span>
          </h1>
          <div className="cursor-pointer w-full flex text-white items-center justify-end">
            <span
              className="text-[20px] leading-[20px] flex relative active:opacity-50 transition"
              onClick={openInfo}
            >
              more
              <HiOutlineArrowNarrowRight className="text-[25px] ml-2" />
              <div className="absolute before:content-[''] border border-white bottom-0 right-0 left-0 rounded-sm"></div>
            </span>
          </div>
        </div>
      </div>
    ),
    info: (
      <div
        className={`${cardCenter} right-0 items-end ${
          more ? 'translate-x-[0]' : 'translate-x-[120%]'
        }`}
      >
        <div className={`${cardInfoBlur}`}>
          <div className="flex">
            <HiOutlineChevronLeft
              className="text-white cursor-pointer text-[30px]"
              onClick={openInfo}
            />
          </div>
          <div className="px-5 py-14 max-md:px-1 max-sm:py-4">
            <p className="font-[Jura] font-normal text-[26px] text-white pt-4 max-md:text-[22px]">
              We are stationed in one of the most beautiful and prestigious
              malls on this planet.
            </p>
            <p className="font-[Jura] font-normal text-[26px] text-white pt-4 max-md:text-[22px]">
              Visit us and we will consult you to all our products
            </p>
          </div>
          <div className="px-5 py-10 flex justify-between max-md:py-1 max-md:px-0 max-md:justify-center max-md:flex-col max-md:items-center">
            <button
              onClick={navContacts}
              className="text-white whitespace-nowrap px-20 py-2  max-xl:px-10 max-lg:px-5 max-md:px-4 max-md:py-1 max-md:m-2 border rounded-lg font-[Jura] text-[20px] shadow-[-11px_0px_20px_rgba(0,0,0,0.29)]"
            >
              Get directions
            </button>
            <button
              onClick={navProducts}
              className="text-white whitespace-nowrap bg-[#0B0B0B] px-20 max-xl:px-10 max-lg:px-5 py-2 max-md:px-4 max-md:py-1 max-md:m-2 border rounded-lg font-[Jura] text-[20px]  shadow-[-10.0565px_-8.22801px_19.1987px_rgba(72,72,72,0.25),5.48534px_6.39956px_19.1987px_#161616]"
            >
              Or buy online
            </button>
          </div>
        </div>
      </div>
    ),
  }
  return (
    <section className="bg-[rgba(16,16,16,1)] py-10">
      <div
        className="relative bg-no-repeat bg-cover bg-center h-[100vh] overflow-hidden"
        style={backgroundImageStyle}
      >
        <div>{cardMore.mall}</div>
        <div>{cardMore.info}</div>
      </div>
    </section>
  )
}

export default MallEmirate
