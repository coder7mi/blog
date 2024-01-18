import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const useLottie = (data) => {
  let lottieRef = useRef(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      })
    }
    return () => {
      lottieRef.current = null
    }
  }, [data])

  return lottieRef
}

export default useLottie
