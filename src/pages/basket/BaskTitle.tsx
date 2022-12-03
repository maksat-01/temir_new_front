import React from 'react'

const BaskTitle = () => {
  return (
    <div className="w-full lg:flex max-xl:hidden py-5">
      <div className="w-[50%] px-4">
        <p className="font-[Arial] text-[16px]">• Product</p>
      </div>
      <div className="w-[50%] flex justify-between pl-8 pr-5">
        <p className="font-[Arial] text-[16px]">• Price</p>
        <p className="font-[Arial] text-[16px]">• Quantity</p>
        <p className="font-[Arial] text-[16px]">• Subtotal</p>
      </div>
    </div>
  )
}

export default BaskTitle
