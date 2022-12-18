import React, { FC, useState, useEffect } from 'react'

//local
import Loading from '../../components/loading/Loading'
import TemirStoreImage from '../../assets/img/AboutImage.svg'
import SmartCard from '../../assets/img/smartCardAbout.svg'
import SmartTags from '../../assets/img/smartCardsAbout.svg'
import SmartKeychain from '../../assets/img/smartKeychainAbout.svg'
import AboutCards from './AboutCards'
import AboutTemirStore from './AboutTemirStore'

const About: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const cardsSmart = [
    {
      id: 1,
      name: 'SMART CARDS',
      desciption:
        'Digital business cards are the modern way to share contact information. They are more interactive, cost effective, and sustainable than their physical counterparts. ',
      code: '01',
      image: SmartCard,
    },
    {
      id: 2,
      name: 'SMART TAGS',
      desciption:
        'Digital business cards are the modern way to share contact information. They are more interactive, cost effective, and sustainable than their physical counterparts. ',
      code: '02',
      image: SmartTags,
    },
    {
      id: 3,
      name: 'SMART KEYCHAIN',
      desciption:
        'Digital business cards are the modern way to share contact information. They are more interactive, cost effective, and sustainable than their physical counterparts. ',
      code: '03',
      image: SmartKeychain,
    },
  ]
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <AboutTemirStore TemirStoreImage={TemirStoreImage} />
          <AboutCards cardsSmart={cardsSmart} />
        </>
      )}
    </>
  )
}

export default About
