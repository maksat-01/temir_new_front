import React, { useState, useEffect } from 'react'

//local
import TemirImage from '../../assets/img/temir.png'
import IphoneBack from '../../assets/img/iphoneBack.png'
import Ekran from '../../assets/img/EkranAnimation.svg'
import EkranPhone from '../../assets/img/EkranAnimationPhone.svg'
import Gold from '../../assets/img/anCard1.png'
import Silver from '../../assets/img/anCard2.png'
import Black from '../../assets/img/anCard3.png'
import Loading from '../../components/loading/Loading'
import HomeHero from './homeHero'
import SmartWay from './SmartWay'
import QrCode from './QrCode'
import ThreeNumber from './ThreeNumber'
import MallEmirate from './MallEmirate'
import Contact from './Contact'
import Faq from './Faq'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const ImagesHero = {
    TemirImage,
    IphoneBack,
    Ekran,
    EkranPhone,
    Gold,
    Silver,
    Black,
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomeHero ImagesHero={ImagesHero} />
          <SmartWay />
          <Faq />
          <QrCode />
          <ThreeNumber />
          <Contact />
          <MallEmirate />
        </>
      )}
    </>
  )
}

export default Home
