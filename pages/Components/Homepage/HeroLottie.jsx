import React from 'react'
import Lottie from 'lottie-react'
import LottieAnimation from '../../../public/Lottie/HeroLottie.json'

const HeroLottie = () => {
  return (
    <div>
      <Lottie animationData={LottieAnimation} />
    </div>
  )
}

export default HeroLottie
