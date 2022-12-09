import React, { FC, useState, useEffect } from 'react'

//local
import TemirStoreImage from '../../assets/img/AboutImage.svg'

const AboutTemirStore: FC = () => {
  const [loading, setLoading] = useState(true)
  console.log(loading)
  useEffect(() => {
    if (TemirStoreImage) {
      setLoading(false)
    }
  }, [])
  return (
    <section className="bg-[#1E1E1E]">
      <div className="lg:container mx-auto max-lg:w-[90%]">
        <div className="font-[Arial] mt-10 pt-20 pb-10">
          <h1 className="text-[100px] text-center max-lg:text-[80px] max-sm:text-[40px]">
            TEMIR STORE
          </h1>
          <p className="text-[30px] text-center w-[60%] max-xl:w-[70%] max-lg:text-[24px] max-md:w-[90%]  max-sm:text-[20px] max-sm:w-full mx-auto py-1">
            Temir card-new generation smart business card with more advanced
            options.
          </p>
          <div>
            {loading ? (
              <div className="border border-blue-100 shadow bg-slate-600 animate-pulse rounded-md p-4 md:w-[514px] max-md:w-[85%] md:h-[200px] max-md:h-[150px] mx-auto"></div>
            ) : (
              <img
                src={TemirStoreImage}
                alt="Temir_Store"
                className="md:w-[514px] max-md:w-[85%] mx-auto my-2"
              />
            )}
          </div>
          <p className="text-[24px] pt-2 text-center w-[55%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[90%] max-sm:text-[20px] max-sm:text-justify max-sm:w-full mx-auto">
            You can add your contact details, social media accounts, pictures
            and more other details and you can update at any time.
            <span>
              No more messing around with a paper business cards. One card for
              life time.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutTemirStore
