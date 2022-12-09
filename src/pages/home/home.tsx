import React, { useState, useEffect } from 'react'

//local
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
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomeHero />
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
