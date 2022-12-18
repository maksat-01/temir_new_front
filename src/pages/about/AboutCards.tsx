import React, { FC } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

//local
import '../../style/about/about.scss'

interface ISmartCards {
  id: number
  name: string
  desciption: string
  code: string
  image: string
}

interface IProps {
  cardsSmart: ISmartCards[]
}

const AboutCards: FC<IProps> = ({ cardsSmart }) => {
  const classesText =
    'font-[Arial] lg:text-[28px] max-lg:text-[24px] max-md:text-[30px] max-[375px]:text-[24px] font-[700] uppercase'
  return (
    <section id="about" className="bg-[#1E1E1E] lg:py-16">
      <div className="lg:container mx-auto max-lg:w-full">
        <div className="bg-black py-2">
          <div className="about flex justify-center max-md:flex-wrap py-6 px-20 max-lg:px-14 max-md:px-10 max-sm:px-2">
            {cardsSmart.map((el) => (
              <div
                key={el.id}
                className={`${
                  el.id === 2 ? 'bg-[#1D1D1D]' : 'bg-[#C6C6C6]'
                } about__cards w-[28%] max-xl:w-[30%] max-md:w-[60%] max-sm:w-[75%] h-[500px] max-xl:h-[470px] cursor-pointer relative overflow-hidden flex flex-col p-3 max-lg:p-2  max-[480px]:w-[70%] max-[375px]:w-[80%] max-md:my-4`}
              >
                <div className="bg-[#363638] image md:mb-28">
                  <img src={el.image} alt="Smart_card" className="w-full" />
                </div>
                <p
                  className={`desc ${
                    el.id === 2 ? 'text-[#C6C6C6]' : 'text-[#1D1D1D]'
                  } w-[290px] max-xl:w-[46%] z-[-10] opacity-0 font-[Arial] text-[16px] font-normal absolute top-20 right-3 text-justify`}
                >
                  {el.desciption}
                </p>
                <div
                  className={`${
                    el.id === 2 ? 'text-[#C6C6C6]' : 'text-[#1D1D1D]'
                  } ${classesText} flex items-center max-md:py-6 max-sm:py-2`}
                >
                  <h2 className="code">{el.code}</h2>
                  <span className="lg:hidden more text-[20px] cursor-pointer lowercase h-[25px] mx-5 leading-[20px] flex relative active:opacity-50 transition">
                    more
                    <HiOutlineArrowNarrowRight className="text-[25px] ml-2" />
                    <div
                      className={`absolute before:content-[''] border ${
                        el.id === 2 ? 'border-white' : 'border-[#1D1D1D]'
                      } bottom-0 right-0 left-0 rounded-sm`}
                    ></div>
                  </span>
                </div>
                <h3
                  className={`${
                    el.id === 2 ? 'text-[#C6C6C6]' : 'text-[#1D1D1D]'
                  } ${classesText} max-lg:w-[50%] max-md:pb-2`}
                >
                  {el.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCards
