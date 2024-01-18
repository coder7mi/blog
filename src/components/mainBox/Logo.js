import React from 'react'
import style from './css/Logo.module.scss'

const RenderItems = ({ className, count }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <div key={index} className={className}></div>
    ))}
  </>
)

export default function Logo() {
  const itemCount = 7

  return (
    <div className={style.loader}>
      <div className={style.container}>
        <div className={style.carousel}>
          <RenderItems className={style.love} count={itemCount} />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.carousel}>
          <RenderItems className={style.death} count={itemCount} />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.carousel}>
          <RenderItems className={style.robots} count={itemCount} />
        </div>
      </div>
    </div>
  )
}
