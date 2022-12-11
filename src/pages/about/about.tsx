import React, { FC, useState, useEffect } from 'react'

//local
import Loading from '../../components/loading/Loading'
import AboutCards from './AboutCards'
import AboutTemirStore from './AboutTemirStore'

const About: FC = () => {
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
          <AboutTemirStore />
          <AboutCards />
        </>
      )}
    </>
  )
}

export default About
