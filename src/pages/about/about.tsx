import React, { FC } from 'react'
import AboutCards from './AboutCards'
import AboutTemirStore from './AboutTemirStore'

const About: FC = () => {
  return (
    <>
      <AboutTemirStore />
      <AboutCards />
    </>
  )
}

export default About
