import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

//local
import ChipPhoto from '../../assets/img/Chip.svg'
import CardPhoto from '../../assets/img/Cardhome.svg'
import TrincetPhoto from '../../assets/img/Trincets.svg'

const SmartWay = () => {
  const classesImages =
    'w-full xl:h-[320px] lg:h-[240px] max-lg:h-[240px] bg-[#363638] rounded-[6.78px] relative overflow-hidden shadow-[-5.42558px_-4.06919px_16.2768px_#181818,0px_18.3113px_16.9549px_rgba(0,0,0,0.29)]'
  const cardDescription =
    'text-white font-[Jura] font-[400] text-[24px] text-center py-3'
  const cardClass =
    'xl:w-[320px] m-1 md:w-[240px] max-md:w-[240px] max-md:mx-10'
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section>
      <div className="container mx-auto max-xl:w-[90%] overflow-hidden">
        <div className="relative flex justify-between my-10">
          <div className="text-[24px] w-full">
            <h1 className="float-left whitespace-nowrap xl:text-[70px] w-[35%] h-[220px] leading-[80px] font-[Arial] text-white tracking-wide lg:text-[56px] md:text-[48px] max-md:text-[48px] max-md:leading-[43px] max-md:float-none max-md:h-10 max-sm:text-[36px]">
              The smart way <br /> of staying <br /> connected
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-[22px] leading-[35px] pt-24 xl:pr-0 lg:pr-[30px] max-md:text-[16px] max-md:leading-[25px]"
            >
              Digital business cards are the modern way to share contact
              information. Digital business cards are more interactive,
              costeffective, and sustainable than their physical counterparts.
              One major benefit of digital business cards is that they can be
              shared with anyone, anywhere.
            </p>
          </div>
        </div>
        <div className="w-full flex md:justify-between flex-wrap mt-8 max-md:justify-center">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className={cardClass}
          >
            <div className={`${classesImages} `}>
              <img src={TrincetPhoto} alt="" className="w-full" />
            </div>
            <p className={cardDescription}>KEYCHAINS</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className={cardClass}
          >
            <div className={`${classesImages} flex justify-end items-end`}>
              <img src={CardPhoto} alt="" className="w-full" />
            </div>
            <p className={cardDescription}>SMART CARDS</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className={cardClass}
          >
            <div
              className={`${classesImages} flex justify-center items-center`}
            >
              <img src={ChipPhoto} alt="" className="w-[45%]" />
            </div>
            <p className={cardDescription}>MOBILE TAGS</p>
          </div>
        </div>
        <div className="flex justify-center items-center my-3 py-10">
          <button className="bg-[#0B0B0B] shadow-[-12.8629px_-10.5242px_24.5564px_rgba(72,72,72,0.25),7.01613px_8.18548px_24.5564px_#000000] text-white font-[Jura] text-[28px] rounded-[5.84px] font-normal py-2 px-10">
            Order
          </button>
        </div>
      </div>
    </section>
  )
}

export default SmartWay
