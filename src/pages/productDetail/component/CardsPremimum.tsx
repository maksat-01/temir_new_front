import React from 'react'
import { HiUpload } from 'react-icons/hi'

//local
import Card1 from '../../../assets/img/card1.svg'
import Card5 from '../../../assets/img/card5.svg'
import Card7 from '../../../assets/img/card7.svg'

const CardsPremimum = () => {
  const classesText =
    'font-[Arial] font-[900] uppercase text-white text-[30px] leading-[42px]'
  const classesBefore =
    "before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"
  const option = [
    {
      image: Card5,
      title: 'Gold Brushed',
    },
    {
      image: Card7,
      title: 'Silver Brushed',
    },
    {
      image: Card1,
      title: 'Black Frost',
    },
  ]

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex relative mt-20 py-5 max-lg:flex-col">
          <div className={`${classesBefore}`}></div>
          <div className="lg:w-[50%] max-lg:w-full">
            <div>
              <h1 className={`${classesText}`}>Premium Smart Card</h1>
              <p className={`${classesText}`}>200 aed</p>
            </div>
            <div className="w-full">
              <p className={`font-[Arial] text-[30px] leading-[42px]`}>
                Choose in option
              </p>
              <div className="bg-[#171717] shadow-[inset_-8px_-9px_11px_rgba(30,30,30,0.25),inset_6px_7px_10px_#000000] rounded-[10px] p-2 flex w-full">
                {option.map((el, idx) => (
                  <div key={idx} className="w-[30%]">
                    <div>
                      <img src={el.image} alt="" className="w-full" />
                    </div>
                    <p>{el.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="my-3">
                <p className="font-[Arial] font-normal text-[16px] text-white py-1">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="text-white bg-[rgba(54,54,56,0.5)] outline-none px-2 py-3 w-[65%] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-[10px] placeholder:text-[16px] placeholder:text-[rgba(255,255,255,0.27)]"
                />
              </div>
              <div className="my-3">
                <p className="font-[Arial] font-normal text-[16px] text-white py-1">
                  Company Logo
                </p>
                <div className="w-[65%] bg-[rgba(54,54,56,0.5)] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] px-2 py-3 text-[16px] text-[rgba(255,255,255,0.27)] rounded-[10px]">
                  <input
                    id="input_file"
                    type="file"
                    className="opacity-0 hidden"
                  />
                  <label
                    htmlFor="input_file"
                    className="flex justify-between items-center"
                  >
                    <span>Upload file</span>
                    <HiUpload className="text-black text-[22px] mr-5" />
                  </label>
                </div>
              </div>
              <div className="flex py-6">
                <button className="bg-[#0B0B0B] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000] rounded-[5px] font-[Jura] text-[30px] py-2 px-10 transition active:opacity-50">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] max-lg:w-full">
            <img src={Card1} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsPremimum
