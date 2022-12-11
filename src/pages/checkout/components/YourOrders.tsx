import React, { FC } from 'react'
interface IProps {
  register: any
}

const YourOrders: FC<IProps> = ({ register }) => {
  const basket = [
    {
      id: 1,
      image: 'TemirBlack',
      name: 'Premium Smart card',
      view: 'Gold Brushed',
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      image: 'TemirBlack',
      name: 'Premium Smart card',
      view: 'Gold Brushed',
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      image: 'TemirBlack',
      name: 'Premium Smart card',
      view: 'Gold Brushed',
      price: 200,
      quantity: 1,
    },
  ]
  return (
    <div className="bg-transparent pt-6">
      <h1 className="font-[Arial] font-[900] text-[30px] max-md:text-[24px] text-center">
        Your Order
      </h1>
      <div className="flex justify-between items-center w-[90%] mx-auto px-4 py-3 max-md:hidden">
        <p className="font-[Arial] text-[26px]">• Product</p>
        <p className="font-[Arial] text-[26px]">• Subtotal</p>
      </div>
      <div className="relative py-5">
        <div className="before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"></div>
        <div className="max-md:rounded-[10px] max-md:bg-[#161616] max-md:mx-4">
          {basket.map((el) => (
            <div className="w-[90%] mx-auto" key={el.id}>
              <div className="flex justify-between items-center ">
                <div className="bg-[#161616] w-[60%] max-md:w-[70%] py-2 pl-4 max-md:pl-0">
                  <div className="border-b-[1px] w-[96%] border-solid border-[#1E1E1E]">
                    <h1 className="font-[Arial] text-[30px] max-lg:text-[24px]">
                      {el.name}
                    </h1>
                    <p className="text-[#B0B0B0] font-[Arial] text-[14px]">
                      {el.view}
                    </p>
                  </div>
                </div>
                <div className="w-[30%]">
                  <div className="border-b-[1px] w-[96%] border-solid border-[#1E1E1E] flex justify-between max-md:justify-center max-md:border-none text-[30px] max-lg:text-[24px] max-md:text-[20px] max-md:whitespace-nowrap">
                    <p className="uppercase text-[#363638]">{el.quantity}x</p>
                    <p className="uppercase max-md:text-[#363638]">200 AED</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-[Arial] text-[30px] max-md:text-[24px] flex justify-between w-[90%] mx-auto px-4 py-5">
          <h3>Total:</h3>
          <h3 className="uppercaes">600 AED</h3>
        </div>
      </div>
    </div>
  )
}

export default YourOrders
