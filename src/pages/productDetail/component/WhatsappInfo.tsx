import React, { FC } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsappInfo: FC = () => {
  // similar classes
  const classesDesc =
    'font-[Jura] font-normal text-[26px] max-md:text-[24px] text-justify'
  const classesBefore =
    "before:content-[''] absolute border border-white rounded-sm"

  //whatsapp number
  const whatsappNumber = `+996500032640`
  const linkWhatsapp = `https://wa.me/${whatsappNumber}`
  const gotoWhatsapp = () => {
    window.location.href = linkWhatsapp
  }
  return (
    <section>
      <div className="container mx-auto max-md:w-[95%]">
        <div className="flex py-10 lg:justify-between max-lg:flex-col">
          <div className="w-[50%] relative px-4 lg:w-[50%] max-lg:w-full max-lg:my-6">
            <div className={`${classesBefore} top-3 bottom-3 left-0`}></div>
            <p className={`${classesDesc} text-[#656565]`}>
              The look and feel of metal will take your TEMIR cards to the next
              level of quality and excellence, exceeding your most valuable
              customer’s expectations.
            </p>
            <p className={`${classesDesc} text-[#656565] mt-6`}>
              Its metallic surface and mechanically engraved details make it a
              striking element of your brand, and an exclusive new experience
              that your customers won’t want to miss out on.
            </p>
          </div>
          <div className="w-[50%] relative px-4 lg:w-[50%] max-lg:w-full">
            <p className={`${classesDesc} text-white`}>
              If you want to change the location of the logo or text, then
              contact us via Whatsapp.
            </p>
            <div
              className={`${classesBefore} top-3 xl:bottom-[40%] lg:bottom-[50%] left-0 max-lg:bottom-[20%]`}
            ></div>
            <div className="flex justify-center items-center py-6">
              <button
                className="text-white flex items-center bg-[rgba(54,54,56,0.5)] shadow-[-12.8629px_-10.5242px_24.5564px_rgba(72,72,72,0.25),7.01613px_8.18548px_24.5564px_#000000] rounded-[5.8px] py-3 px-10 max-md:py-2 max-md:px-4 font-[Jura] text-[28px] max-md:text-[22px]"
                onClick={gotoWhatsapp}
              >
                <BsWhatsapp className="mr-4" />
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsappInfo
