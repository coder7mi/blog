import React, { useRef } from 'react'
import useLottie from '../../hooks/useLottie'
import loadingAnimate from '../../static/lottie/loading-animate.json'

export default function LoadComp() {
  const loadRef = useLottie(loadingAnimate)
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="loading" style={{ width: '200px', height: '200px' }} ref={loadRef}></div>
    </div>
  )
}
