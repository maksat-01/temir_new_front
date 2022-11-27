import React from 'react'

const BasketTotal = () => {
  return (
    <div className="w-full flex justify-end py-2">
      <div className="w-[50%] max-md:w-full flex justify-between items-center px-8">
        <p className="font-[900] text-[30px]">Total:</p>
        <p className="font-[900] text-[30px] uppercase">400 AED</p>
      </div>
    </div>
  )
}

export default BasketTotal
