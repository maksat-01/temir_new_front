import React, { useState, FC } from 'react'
import { HiUpload } from 'react-icons/hi'

//local
import { addToBasket } from '../../basket/ReducerBasket/ActionBasket'
import Card1 from '../../../assets/img/card1.svg'
import Card5 from '../../../assets/img/card5.svg'
import EmptyCard from '../../../assets/img/empty-card.svg'
import { useAppDispatch } from '../../../hooks'

const CardsPremimum: FC = () => {
  const classesText =
    'font-[Arial] font-[900] uppercase text-white text-[30px] leading-[42px]'
  const classesBefore =
    "before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"
  const option = [
    {
      image: Card1,
      title: 'Gold Brushed',
    },
    {
      image: Card5,
      title: 'Silver Brushed',
    },
    {
      image: EmptyCard,
      title: 'Black Frost',
    },
  ]
  const dispatch = useAppDispatch()
  const basket = JSON.parse(localStorage.getItem('basket') as any)
  const [mainCard, setMainCard] = useState<any>(EmptyCard)
  const [imageUrl, setImageUrl] = useState<any>('')
  const fileReader = new FileReader()
  fileReader.onloadend = () => setImageUrl(fileReader.result)
  const [cardData, setCardData] = useState<any>({
    title: 'TEMIR',
    logo: imageUrl,
  })
  const [product, setProduct] = useState<any>({
    title: cardData.title,
    logo: imageUrl,
    img: EmptyCard,
    price: '200',
    type: '',
    name: 'Premium Smart card',
    quantity: 1,
  })
  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === 'title'
          ? e.target.value.toUpperCase()
          : product[e.target.name],
    })
    setCardData({
      ...cardData,
      [e.target.name]:
        e.target.name !== 'logo'
          ? e.target.value.toUpperCase()
          : fileReader.readAsDataURL(e.target.files[0]),
    })
  }
  return (
    <section>
      <div className="container mx-auto pt-10">
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
              <div className="bg-[#171717] shadow-[inset_-8px_-9px_11px_rgba(30,30,30,0.25),inset_6px_7px_10px_#000000] rounded-[10px] p-2 flex items-center w-full">
                {option.map((el, idx) => (
                  <div key={idx}>
                    <div
                      onClick={() => {
                        setMainCard(el.image)
                        setProduct({
                          ...product,
                          type: el.title,
                          img: el.image,
                        })
                      }}
                      className="relative flex items-center justify-center m-1"
                    >
                      <img
                        src={el.image}
                        alt=""
                        className="w-full cursor-pointer"
                      />
                      <h2 className="absolute p-2 text-[16px] font-bold opacity-75 tracking-widest">
                        TEMIR
                      </h2>
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
                  onChange={handleChange}
                  type="text"
                  placeholder="Insert your name"
                  className="text-white bg-[rgba(54,54,56,0.5)] outline-none px-2 py-3 w-[65%] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-[10px] placeholder:text-[16px] placeholder:text-[rgba(255,255,255,0.27)]"
                  name="title"
                />
              </div>
              <div className="my-3">
                <p className="font-[Arial] font-normal text-[16px] text-white py-1">
                  Company Logo
                </p>
                <div className="w-[65%] bg-[rgba(54,54,56,0.5)] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] px-2 py-3 text-[16px] text-[rgba(255,255,255,0.27)] rounded-[10px]">
                  <input
                    onChange={handleChange}
                    id="input_file"
                    type="file"
                    name="logo"
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
                <button
                  onClick={() => {
                    dispatch(addToBasket(product))
                    console.log(basket)
                  }}
                  className="bg-[#0B0B0B] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000] rounded-[5px] font-[Jura] text-[30px] py-2 px-10 transition active:opacity-50"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="temir-card lg:w-[50%] h-full max-lg:w-full relative overflow-hidden">
            <div className="absolute z-10 flex flex-col w-full my-2 top-[25%] items-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  width={300}
                  className="temir-card--logo mx-auto h-[40px]"
                  alt="image_url"
                />
              ) : (
                ''
              )}
            </div>
            <div className="absolute z-10 flex flex-col w-full bottom-[45%] items-center flex-nowrap">
              <h1 className="px-6 temir-card--title m-auto left-0 text-[40px] font-bold opacity-75 tracking-widest">
                {cardData.title}
              </h1>
            </div>
            <div className="">
              <img src={mainCard} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsPremimum
