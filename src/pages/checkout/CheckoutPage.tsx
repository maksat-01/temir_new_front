import React, { FC, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

//local
import Loading from '../../components/loading/Loading'
import { ICheckout } from './reducer/checkoutSlice'
import HeroCheckout from './components/HeroCheckout'
import YourOrders from './components/YourOrders'
import PaymentMethod from './components/PaymentMethod'
import { postChechout } from './reducer/actionsCheckout'
import { useAppDispatch } from '../../hooks'

const CheckoutPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  useEffect(() => {
    setLoading(false)
  }, [])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckout>()
  const onSubmit: SubmitHandler<ICheckout> = (data) => {
    dispatch(postChechout(data))
    reset()
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section
            id="checkout-page"
            className="bg-[rgba(14,14,14,1)] text-white pt-28"
          >
            <div className="container mx-auto max-md:w-[100%]">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <HeroCheckout register={register} errors={errors} />
                <YourOrders register={register} />
                <PaymentMethod />
              </form>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default CheckoutPage
