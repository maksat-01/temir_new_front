import React, { FC, useState, useEffect } from 'react'
import Loading from '../../components/loading/Loading'

//local
import Contact from '../home/Contact'

const ContactUs: FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return <>{loading ? <Loading /> : <Contact />}</>
}

export default ContactUs
