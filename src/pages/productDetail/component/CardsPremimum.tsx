import React, { useState, FC, useEffect } from 'react'
import { HiUpload } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom'

//local
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addToBasket } from '../../basket/ReducerBasket/ActionBasket'
import { getProductsPage } from '../../productPage/reducer/actionProductPage'
import { fetchDetailProduct } from '../reducer/actionDetailPage'

const CardsPremimum: FC = () => {
  //Класссы тегов
  const classesText =
    'font-[Arial] font-[900] uppercase text-white text-[30px] leading-[42px]'
  const classesBefore =
    "before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"

  //useParams
  const { idCard } = useParams()

  //Продукты
  const productAll = useAppSelector((state) => state.productSlice.products_page)
  const productOne = useAppSelector(
    (state) => state.productDetailSlice.detail_product
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
    img: productOne.image,
    price: productOne.price,
    type: '',
    name: productOne.name,
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
  useEffect(() => {
    dispatch(getProductsPage())
    dispatch(fetchDetailProduct(idCard))
  }, [dispatch, idCard])
  return (
    <section>
      <div className="container mx-auto pt-10">
        <div className="flex relative mt-20 py-5 max-lg:flex-col">
          <div className={`${classesBefore}`}></div>
          <div className="lg:w-[50%] max-lg:w-full">
            <div>
              <h1 className={`${classesText}`}>{productOne.name}</h1>
              <p className={`${classesText}`}>{productOne.price} aed</p>
            </div>
            <div className="w-full">
              <p className={`font-[Arial] text-[30px] leading-[42px]`}>
                Choose in option
              </p>
              <div className="bg-[#171717] overflow-x-scroll scroll__webkit shadow-[inset_-8px_-9px_11px_rgba(30,30,30,0.25),inset_6px_7px_10px_#000000] rounded-[10px] flex items-center w-full">
                {productAll.map((el) => (
                  <div
                    key={el.id}
                    className="p-2"
                    onClick={() => {
                      navigate(`/productDetail/${el.id}`)
                    }}
                  >
                    <div
                      onClick={() => {
                        setProduct({
                          ...product,
                          type: el.name,
                          img: el.image,
                        })
                      }}
                      className="relative flex items-center justify-center w-[200px] m-1"
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
                    <p>{el.name}</p>
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
            <div className="p-2">
              <img src={productOne.image} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsPremimum
