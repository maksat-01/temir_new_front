import React, { FC, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ThreeNumber: FC = () => {
  const lineBefore =
    "before:content-[''] absolute border border-white top-0 right-0 left-0 rounded-sm"
  const numberClases =
    'text-center text-white font-[Jura] text-[100px] font-[600] tracking-wide leading-[100px]'
  const textClases =
    'text-center text-white font-[Jura] text-[30px] font-normal tracking-wide'
  const deckClases = 'text-center text-[#676767] font-[Arial] text-[20px]'
  const cards = [
    {
      number: '1',
      text: 'Fast delivery',
      deck: 'We deliver right to your front door or office. Free of charge!',
    },
    {
      number: '2',
      text: 'High quality',
      deck: 'We are committed to work only with the highest product quality.',
    },
    {
      number: '3',
      text: 'Customer Service',
      deck: 'We are just one phone call away. For anything.',
    },
  ]
  useEffect(() => {
    Aos.init()
  })
  return (
    <section className="bg-[rgba(16,16,16,1)] ">
      <div className="flex justify-between flex-wrap max-lg:justify-center py-5">
        {cards.map((el, idx) => (
          <div
            className="relative max-w-[30%] py-4 px-2 overflow-hidden max-lg:mx-10 max-lg:my-4 max-lg:max-w-[300px]"
            key={idx}
          >
            <div className={`${lineBefore}`}></div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="w-full"
            >
              <h1 className={`${numberClases}`}>{el.number}</h1>
              <h2 className={`${textClases}`}>{el.text}</h2>
              <p className={`${deckClases}`}>{el.deck}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ThreeNumber
