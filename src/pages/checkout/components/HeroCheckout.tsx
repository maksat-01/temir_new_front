import React, { FC } from 'react'

interface IProps {
  register: any
  errors: any
}

const HeroCheckout: FC<IProps> = ({ register, errors }) => {
  const inputTitle = 'font-[Arial] text-[16px] py-1'
  const classesBlock =
    'bg-[rgba(54,54,56,0.5)] shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-[10px]'
  const classesInput = `${classesBlock} w-full py-4 px-2 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.27)] outline-0`
  return (
    <div>
      <div className="bg-[#161616] max-md:bg-transparent rounded-[10px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] py-2">
        <h1 className=" font-[Arial] font-[900] text-[30px] max-md:text-[24px] text-center p-2">
          Checkout
        </h1>
        <div className="flex justify-around max-md:items-center max-md:flex-col w-full">
          <div className="flex flex-col w-[45%] max-md:w-[90%]">
            <div className="pb-5 w-full">
              <p className={`${inputTitle}`}>First name*</p>
              <input
                type="text"
                {...register('first_name', { required: true })}
                placeholder="Enter your first name"
                className={`${classesInput} ${
                  errors.first_name && 'border-[1px] border-red-700'
                }`}
              />
              {errors.first_name && (
                <span className="text-red-500 text-[12px]">
                  Please enter your first name
                </span>
              )}
            </div>
            <div className="pb-5">
              <p className={`${inputTitle}`}>Last name*</p>
              <input
                type="text"
                {...register('last_name', { required: true })}
                placeholder="Enter your last name"
                className={`${classesInput} ${
                  errors.last_name && 'border-[1px] border-red-700'
                }`}
              />
              {/*<input*/}
              {/*  type="text"*/}
              {/*  {...register('country', { required: true })}*/}
              {/*  placeholder="Enter your country"*/}
              {/*  className={`${classesInput} ${*/}
              {/*    errors.country && 'border-[1px] border-red-700'*/}
              {/*  }`}*/}
              {/*/>*/}

              {errors.last_name && (
                <span className="text-red-500 text-[12px]">
                  Please enter your last name
                </span>
              )}
            </div>
            <div className="pb-5">
              <p className={`${inputTitle}`}>Company name</p>
              <input
                type="text"
                {...register('company_name', { required: true })}
                placeholder="Enter your company name"
                className={`${classesInput} ${
                  errors.company_name && 'border-[1px] border-red-700'
                }`}
              />
              {errors.company_name && (
                <span className="text-red-500 text-[12px]">
                  Please enter your company name
                </span>
              )}
            </div>
            <div className="pb-5">
              <p className={`${inputTitle}`}>Phone*</p>
              <input
                type="tel"
                {...register('phone', { required: true })}
                placeholder="+971(-_-------)"
                pattern="+[0-9]{3}-[0-9]{9}"
                className={`${classesInput} input_number ${
                  errors.phone && 'border-[1px] border-red-700'
                }`}
              />
              {errors.phone && (
                <span className="text-red-500 text-[12px]">
                  Please enter your phone number
                </span>
              )}
            </div>
            <div className="pb-5">
              <p className={`${inputTitle}`}>Email*</p>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Enter your email"
                className={`${classesInput} ${
                  errors.email && 'border-[1px] border-red-700'
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-[12px]">
                  Please enter your email
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[45%] max-md:w-[90%]">
            <div className="flex flex-col w-[100%]">
              <p className={`${inputTitle}`}>Delivery address*</p>
              <div className="select-wrapper relative w-full mb-5">
                <select
                  name=""
                  id=""
                  className={`${classesBlock} select_option w-full cursor-pointer p-3 outline-none`}
                >
                  <option value="" className="">
                    UAE
                  </option>
                </select>
              </div>
              <div className="select-wrapper relative w-full mb-5">
                <select
                  name=""
                  id=""
                  className={`${classesBlock} select_option w-full cursor-pointer p-3 outline-none focus:outline-none`}
                >
                  <option value="">Abu Dhabi</option>
                  <option value="">Ajman</option>
                  <option value="">El Fujairah</option>
                  <option value="">Dubai</option>
                  <option value="">Umm al-Kaywain</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pb-5 w-[100%] payment_method">
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
                {...register('street_address', { required: true })}
                placeholder="Enter your street"
                className={`${classesInput} ${
                  errors.street_address && 'border-[1px] border-red-700'
                }`}
              />
              {errors.street_address && (
                <span className="text-red-500 text-[12px]">
                  Please enter your street address
                </span>
              )}
            </div>
            <div className="pb-5">
              <p className={`${inputTitle}`}>Villa*</p>
              <input
                type="number"
                {...register('house', { required: true })}
                placeholder="Enter your villa number"
                className={`${classesInput} input_number ${
                  errors.house && 'border-[1px] border-red-700'
                }`}
              />
              {errors.house && (
                <span className="text-red-500 text-[12px]">
                  Please enter your house
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="my-4 w-[95%] max-md:w-[90%] mx-auto">
          <p className={`${inputTitle}`}>Order*</p>
          <textarea
            {...register('order_notes', { required: true })}
            placeholder="Notes about your orders"
            className={`${classesBlock} ${
              errors.order_notes && 'border-[1px] border-red-700'
            } w-full min-h-[100px] py-4 px-2 resize-y text-[16px] text-white placeholder:text-[rgba(255,255,255,0.27)] outline-0`}
          ></textarea>
          {errors.order_notes && (
            <span className="text-red-500 text-[12px]">
              Please enter your order notes
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroCheckout
