import React from 'react'
import Lottie from 'lottie-react'
import lottieLoading from '../../../public/Lottie/lottieLoading.json' 

const LoadingAnimation = () => {
  return (            
    <div>
      <Lottie animationData={lottieLoading} />
    </div>
  )
}

export default LoadingAnimation
