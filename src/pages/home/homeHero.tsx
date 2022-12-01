import React from 'react'

//local
import '../../style/home/hero/hero.scss'
import temir from '../../assets/img/temir.png'
import iphoneBack from '../../assets/img/iphoneBack.png'
import ekran from '../../assets/img/EkranAnimation.svg'
import ekranPhone from '../../assets/img/EkranAnimationPhone.svg'
import Gold from '../../assets/img/anCard1.png'
import Silver from '../../assets/img/anCard2.png'
import Black from '../../assets/img/anCard3.png'

const HomeHero = () => {
  const cards = [
    {
      id: 1,
      image: Gold,
      text: '• Gold Brushed',
    },
    {
      id: 2,
      image: Silver,
      text: '• Silver Brushed',
    },
    {
      id: 3,
      image: Black,
      text: '• Black Frost',
    },
  ]
  return (
    <section id="hero">
      <div className="container mx-auto max-md:w-[90%] hero">
        <div className="flex justify-center font-[Arial] flex-col items-center pt-20 overflow-hidden">
          <h1 className="temir_text text-white text-[100px] max-lg:text-[70px] max-md:text-[48px] text-center pt-10">
            Smart interface
          </h1>
          <div className="flex w-[50%] max-xl:w-[56%] max-lg:w-[60%] max-sm:w-[90%] justify-between text-[24px] max-lg:text-[20px] max-md:text-[16px] mt-1 mb-5">
            <p className="text-li-1">• High quality products</p>
            <p className="text-li-2">• Convenient to use</p>
          </div>
          <img
            src={temir}
            alt="img"
            className="temir-cart max-md:w-[250px] max-sm:w-[185px]"
          />
          <div className="relative flex justify-center">
            <div className="iphoneBack w-[222px] max-md:w-[180px] max-sm:w-[132px] flex flex-col items-center relative">
              <img src={iphoneBack} alt="img" className="w-full" />
              <img
                src={ekranPhone}
                alt="img"
                className="ekran-phone w-[190px] max-md:w-[152px] max-sm:w-[113px] absolute top-[6px] left-[6px] max-sm:top-[3px] max-sm:left-[3px]"
              />
              <img
                src={ekran}
                alt="img"
                className="ekran w-[190px] max-md:w-[152px] max-sm:w-[113px] absolute top-[6px] left-[6px] max-sm:top-[3px] max-sm:left-[3px] z-[-2]"
              />
            </div>
            <div className="cards_back absolute top-7 left-1 z-[-5] w-[190px] max-md:w-[160px] max-sm:w-[120px] max-md:top-3 max-sm:top-1">
              {cards.map((el) => (
                <div key={el.id} className="flex flex-col my-8 max-md:my-4">
                  <div className="relative">
                    <img
                      src={el.image}
                      alt="img_card"
                      className="rounded-[10px] w-full"
                    />
                    <div className="absolute top-0 left-0 bottom-0 right-0 w-[190px] max-md:w-[160px] max-sm:w-[120px] h-[110px] max-md:h-[90px] max-sm:h-[80px] flex justify-center items-center">
                      <h2 className="uppercase text-[18px] max-sm:text-[16px] font-[Arial] text-[#d1d1d1] font-[700] tracking-widest">
                        TEMIR
                      </h2>
                    </div>
                  </div>
                  <p className="text-[#B0B0B0] font-[Arial] text-[14px] max-sm:text-[12px] font-[900]">
                    {el.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
