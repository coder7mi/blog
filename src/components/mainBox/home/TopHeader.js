import React, { useState } from 'react'
import style from '../css/TopHeader.module.scss'
import { Layout } from 'antd'
import Logo from '../Logo'

const { Header } = Layout

const menuList = ['开始', '关于', '项目', '找我']

export default function TopHeader(props) {
  const [current, setCurrent] = useState(0)

  const clickMenu = (index) => {
    setCurrent(index)
    props.eleList[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <Header className={style.header}>
      <Logo></Logo>
      <div className={style.menu}>
        {menuList.map((item, index) => (
          <div
            className={current === index ? `${style.item} ${style.active}` : style.item}
            key={index}
            onClick={() => clickMenu(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </Header>
  )
}
