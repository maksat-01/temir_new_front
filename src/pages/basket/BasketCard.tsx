import React, { FC } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {TbTrash} from "react-icons/tb";
//local
import DeleteBasket from '../../assets/img/basketDelete.svg'
import {useAppDispatch} from "../../hooks";
import {deleteFromBasket, raiseTheQuantity, reduceTheQuantity} from "./ReducerBasket/ActionBasket";


interface IProps {
  el: any
  idx: number,
}

const BasketCard: FC<IProps> = ({ el,idx }) => {
  const classesBgRounded =
    'w-[35px] h-[35px] bg-[rgba(54,54,56,0.5)] rounded-[50%] flex justify-center items-center cursor-pointer'
  const quantityPrice = +el.quantityCard * +el.price

  const dispatch = useAppDispatch()

  return (
    <div className="flex relative" key={el.id}>
      <div className="lg:w-[50%] max-lg:w-[85%] max-md:w-[60%] flex max-md:flex-col border-b-[1px] border-[#1E1E1E] max-lg:border-[#ffffff] max-lg:py-4">
        <div className="bg-[rgba(54,54,56,0.5)] p-2 mt-2 w-[40%] max-md:w-[80%] max-md:ml-4 flex items-center justify-center max-lg:rounded-[10px]">
          <img src={el.image} alt="No_image" className="w-full" />
        </div>
        <div className="flex flex-col mx-1 pt-4 max-lg:pt-1 max-lg:mx-4">
          <h1 className="font-[Arial] font-normal lg:text-[30px] lg:leading-[34px] max-lg:text-[26px] max-xl:leading-[30px] max-md:text-[22px]">
            {el.name}
          </h1>
          <p className="font-[Arial] font-normal text-[20px] max-md:text-[14px] text-[#B0B0B0]">
            {el.type}
          </p>
        </div>
      </div>
      <div className="lg:w-[50%] max-lg:w-[25%] max-md:w-[40%] flex flex-col lg:border-l-[1px] border-b-[1px] border-solid border-[#1E1E1E] max-lg:border-[#ffffff] max-lg:py-4">
        <div className="flex lg:justify-between lg:items-center max-lg:flex-col-reverse max-lg:items-end max-md:flex-col max-lg:flex-1 px-6 pt-4 max-md:pl-0 max-md:pr-4">
          <p className="uppercase text-[20px] max-lg:hidden">{el.price} AED</p>
          <p className="lg:hidden max-lg:flex max-lg:absolute max-lg:left-[33%] top-[58%] max-md:static max-md:my-2 uppercase text-[#363638] text-[18px] max-md:text-[15px] font-[600]">
            {el.quantityCard + ' x ' + el.price} AED
          </p>
          <div className="flex items-center max-md:my-1">
            <span
              onClick={() => dispatch(reduceTheQuantity(idx))}
              className={`${classesBgRounded}`}>
              <AiOutlineMinus />
            </span>
            <p className="font-[Arial] text-[28px] font-normal px-2">
              {el.quantityCard}
            </p>
            <span
              onClick={() => dispatch(raiseTheQuantity(idx))}
              className={`${classesBgRounded}`}>
              <AiOutlinePlus />
            </span>
          </div>
          <p className="uppercase text-[20px]">{quantityPrice} AED</p>
        </div>
        <div className="px-4">
          <div
            onClick={() => dispatch(deleteFromBasket(idx))}
            className={`${classesBgRounded} absolute bottom-4 right-4 max-lg:left-[33%] max-md:left-[91%]`}
          >
            <TbTrash className='text-red-700 text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketCard
