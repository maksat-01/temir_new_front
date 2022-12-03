import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

//local
import { fetchContactUs } from './reducerContactUs/actionContactUs'
import { useAppDispatch } from '../../hooks/index'

type Inputs = {
  full_name: string
  email: string
  message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(fetchContactUs(data))
    reset()
  }
  const classesText =
    'font-light text-sm pb-1.5 tracking-wide font-[Jura] text-[14px]'
  const classesInput =
    'w-96 max-sm:w-[100%] py-1.5 bg-transparent border-b-2 placeholder-gray-500 outline-0 pl-1.5'
  return (
    <section className="bg-[rgba(16,16,16,1)]">
      <div className="container mx-auto max-md:w-[90%]">
        <form
          className="contacts flex items-center content-center flex-col py-40 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold text-4xl tracking-wide text-white py-14 text-center">
            Contact us
          </h1>
          <div className="flex flex-col mb-7 max-sm:w-[80%]">
            <h5 className={`${classesText}`}>Full name</h5>
            <input
              type="text"
              {...register('full_name', { required: true })}
              placeholder="Felix Chan..."
              className={`${classesInput}`}
            />
            {errors.full_name && (
              <span className="text-red-500 pb-2 text-[14px] font-[Jura]">
                This is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-7 max-sm:w-[80%]">
            <h5 className={`${classesText}`}>Email</h5>
            <input
              type="text"
              {...register('email', { required: true })}
              placeholder="Felix Chan..."
              className={`${classesInput}`}
            />
            {errors.email && (
              <span className="text-red-500 pb-2 text-[14px] font-[Jura]">
                This is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-7 max-sm:w-[80%]">
            <h5 className={`${classesText}`}>Message</h5>
            <input
              type="text"
              {...register('message', { required: true })}
              placeholder="Felix Chan..."
              className={`${classesInput}`}
            />
            {errors.message && (
              <span className="text-red-500 pb-2 text-[14px] font-[Jura]">
                This is required
              </span>
            )}
          </div>
          <button
            className="w-56 h-14 bg-black font-normal text-lg text-white my-10 rounded-md hover:scale-110 hover:bg-transparent transition duration-500 ease-in-out"
            style={{
              boxShadow:
                '-12.8629px -10.5242px 24.5564px rgba(72, 72, 72, 0.25), 7.01613px 8.18548px 24.5564px #000000',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
