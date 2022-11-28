import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

const CheckoutPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
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
  ]
  const ClassesBtn =
    'font-[Jura] text-[30px] bg-[#0B0B0B] shadow-[-10.93px_-8.94274px_20.8664px_rgba(72,72,72,0.25),5.96183px_6.95546px_20.8664px_#000000] rounded-[5px] hover:scale-110 hover:bg-transparent transition duration-500 ease-in-out'
  const classesBlock =
    'bg-[rgba(54,54,56,0.5)] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-[10px]'
  const classesInput = `${classesBlock} w-[420px] py-4 px-2 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.27)] outline-0`
  const inputTitle = 'font-[Arial] text-[16px] py-1'
  const onSubmit = (data: any) => console.log(data)
  return (
    <>
      <section className="bg-[rgba(14,14,14,1)] text-white">
        <div className="container mx-auto py-4">
          <div className="bg-[#161616] rounded-[10px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] py-2">
            <h1 className=" font-[Arial] font-[900] text-[30px] text-center p-2">
              Checkout
            </h1>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <div className="flex justify-around">
                <div className="flex flex-col py-1 px-4">
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>First name*</p>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className={`${classesInput}`}
                    />
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Last name*</p>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className={`${classesInput}`}
                    />
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Company name</p>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className={`${classesInput}`}
                    />
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Phone*</p>
                    <input
                      type="number"
                      placeholder="+971(-_-------)"
                      pattern="+[0-9]{3}-[0-9]{9}"
                      className={`${classesInput} input_number`}
                    />
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Email*</p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`${classesInput}`}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-1 px-4">
                  <div className="flex flex-col">
                    <p className={`${inputTitle}`}>Delivery address*</p>
                    <select
                      name=""
                      id=""
                      className={`${classesBlock} py-3 p-3 mb-5 outline-none`}
                    >
                      <option value="" className="w-[50%] bg-black">
                        Country
                      </option>
                    </select>
                    <select
                      name=""
                      id=""
                      className={`${classesBlock} py-3 p-3 mb-5 outline-none`}
                    >
                      <option value="">Abu Dhabi</option>
                    </select>
                  </div>
                  <div className="flex justify-between pb-5">
                    <label
                      htmlFor="villa"
                      className={`${classesBlock} px-2 py-4 w-[45%] cursor-pointer`}
                    >
                      <input
                        type="radio"
                        id="villa"
                        name="pay"
                        value="Villa"
                        className="mx-4"
                      />
                      Villa
                    </label>
                    <label
                      htmlFor="apartment"
                      className={`${classesBlock} px-2 py-4 w-[45%] cursor-pointer`}
                    >
                      <input
                        type="radio"
                        id="apartment"
                        name="pay"
                        value="Apartment"
                        className="mx-4"
                      />
                      Apartment
                    </label>
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Street address*</p>
                    <input
                      type="text"
                      placeholder="Enter your street"
                      className={`${classesInput}`}
                    />
                  </div>
                  <div className="pb-5">
                    <p className={`${inputTitle}`}>Villa*</p>
                    <input
                      type="number"
                      placeholder="Enter your villa number"
                      className={`${classesInput} input_number`}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[91%] mx-auto p-4">
                <p className={`${inputTitle}`}>First name*</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Notes about your orders"
                  className={`${classesBlock} w-full py-4 px-2 resize-none text-[16px] text-white placeholder:text-[rgba(255,255,255,0.27)] outline-0`}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="py-6">
            <h1 className="font-[Arial] font-[900] text-[30px] text-center">
              Your Order
            </h1>
            <div className="flex justify-between items-center w-[85%] mx-auto px-4 py-3">
              <p className="font-[Arial] text-[26px]">• Product</p>
              <p className="font-[Arial] text-[26px]">• Subtotal</p>
            </div>
            <div className="relative py-5">
              <div className="before:content-[''] absolute border border-white rounded-sm top-0 left-0 right-0"></div>
              {basket.map((el) => (
                <div className="w-[85%] mx-auto" key={el.id}>
                  <div className="flex justify-between items-center ">
                    <div className="bg-[#161616] w-[420px] py-2 pl-4">
                      <div className="border-b-[1px] w-[96%] border-solid border-[#1E1E1E]">
                        <h1 className="font-[Arial] text-[30px]">{el.name}</h1>
                        <p className="text-[#B0B0B0] font-[Arial] text-[14px]">
                          {el.view}
                        </p>
                      </div>
                    </div>
                    <div className="w-[30%]">
                      <div className="border-b-[1px] w-[96%] border-solid border-[#1E1E1E] flex justify-between text-[30px]">
                        <p className="uppercase text-[#363638]">
                          {el.quantity}x
                        </p>
                        <p className="uppercase">200 AED</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="font-[Arial] text-[30px] flex justify-between w-[85%] mx-auto px-4 py-5">
                <h3>Total:</h3>
                <h3 className="uppercaes">400 AED</h3>
              </div>
              <div className="w-[85%] mx-auto flex items-center">
                <div className="w-[420px]">
                  <p className={`${inputTitle}`}>Payment method*</p>
                  <div className="flex justify-between">
                    <label
                      htmlFor="cash"
                      className={`${classesBlock} px-2 py-4 w-[45%] cursor-pointer`}
                    >
                      <input
                        type="radio"
                        id="cash"
                        name="pay"
                        value="Cash"
                        className="mx-4"
                      />
                      Cash on delivery
                    </label>
                    <label
                      htmlFor="payd"
                      className={`${classesBlock} px-2 py-4 w-[45%] cursor-pointer`}
                    >
                      <input
                        type="radio"
                        id="payd"
                        name="pay"
                        value="Payd"
                        className="mx-4"
                      />
                      Pay by card
                    </label>
                  </div>
                </div>
                <div className="w-[60%] flex justify-end items-center">
                  <button className={`${ClassesBtn} py-2 px-20`}>
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckoutPage
