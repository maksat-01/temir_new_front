import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[5000] bg-black w-[100vw] h-[100vh] flex justify-center items-center">
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.4"
        width="100"
        visible={true}
      />
    </div>
  )
}

export default Loading
