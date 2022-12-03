import React, { FC } from 'react'
import QRCode from 'react-qr-code'

const QrCode: FC = () => {
  const link = 'https://www.instagram.com/kabyl_ulan/'
  const navLink = () => {
    window.location.href = link
  }
  const line = "before:content-[''] absolute border border-white rounded-sm"
  return (
    <section>
      <div className="bg-[rgba(16,16,16,1)] py-[8vh]">
        <h1 className="font-[Arial] font-normal text-center text-transparent bg-[linear-gradient(180deg,#FFFFFF_47.71%,rgba(255,255,255,0)_100%)] bg-clip-text fill-transparent text-[40px]">
          INTERFACE
        </h1>
        <div className="relative max-w-[220px] mx-auto">
          <div className={`${line} top-0 left-0 bottom-[65%]`}></div>
          <div className="p-2 bg-white w-[85%] mx-auto">
            <QRCode value={link} size={170} />
          </div>
          <div className={`${line} top-[70%] right-0 bottom-0`}></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-white font-[Jura] font-[100] text-[22px] tracking-wide leading-[140.3%]">
            Scun to preview
          </p>
          <p className="text-[rgba(255,255,255,0.5)] text-center">or</p>
          <button
            onClick={navLink}
            className="bg-transparent text-white font-normal font-[Jura] text-[21.89px] border-white border-[2px] rounded py-1 px-3 my-3 hover:scale-125 transition"
          >
            Go over
          </button>
        </div>
      </div>
    </section>
  )
}

export default QrCode
