import React, { FC } from 'react'

const PaymentMethod: FC = () => {
  const ClassesBtn =
    'font-[Jura] text-[30px] bg-[#0B0B0B] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000] rounded-[5px] hover:scale-110 hover:bg-transparent transition duration-500 ease-in-out'
  const classesBlock =
    'bg-[rgba(54,54,56,0.5)] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-[10px]'
  const inputTitle = 'font-[Arial] text-[16px] py-1'
  return (
    <div className="w-[90%] pb-10 max-md:w-full max-md:px-4 mx-auto flex items-center max-lg:flex-col">
      <div className="w-[60%] max-lg:w-full max-lg:mb-10">
        <p className={`${inputTitle}`}>Payment method*</p>
        <div className="flex justify-between items-center payment_method">
          <label
            htmlFor="cash"
            className={`${classesBlock} max-sm:text-[16px] px-2 py-4 w-[45%] max-sm:w-[48%] max-sm:px-1 cursor-pointer`}
          >
            <input
              type="radio"
              id="cash"
              name="pay"
              value="Cash"
              className="mx-4 max-sm:mx-2"
            />
            Cash on delivery
          </label>
          <label
            htmlFor="payd"
            className={`${classesBlock} max-sm:text-[16px] px-2 py-4 w-[45%] max-sm:w-[48%] max-sm:px-1 cursor-pointer`}
          >
            <input
              type="radio"
              id="payd"
              name="pay"
              value="Payd"
              className="mx-4 max-sm:mx-2"
            />
            Pay by card
          </label>
        </div>
      </div>
      <div className="w-[50%] max-md:w-[100%] flex justify-end max-lg:justify-center items-center">
        <button className={`${ClassesBtn} py-2 px-20 max-xl:px-12`}>
          Place order
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
