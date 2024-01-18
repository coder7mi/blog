import React, { forwardRef, useRef } from 'react'
import style from '../css/FindMe.module.scss'
import IconFont from '../IconFont'
import { Space, Tooltip } from 'antd'
import useLottie from '../../../hooks/useLottie'
import yellowMan from '../../../static/lottie/yellow-man.json'

const list = [
  {
    icon: 'icon-github',
    link: 'https://github.com/jiangshit'
  },
  {
    icon: 'icon-juejin',
    link: 'https://juejin.cn/user/1726659354953047'
  },
  {
    icon: 'icon-QQ',
    desc: '2533098975'
  },
  {
    icon: 'icon-gmail',
    desc: 'jiangshit7@gmail.com'
  }
]

const techList = [
  {
    icon: 'icon-React',
    color: '#60D7F8',
    title: 'React'
  },
  {
    icon: 'icon-javascript',
    color: '#FFCA28',
    title: 'JavaScript'
  },
  {
    icon: 'icon-AntDesign',
    color: '#0F76FF',
    title: 'AntDesign'
  },
  {
    icon: 'icon-sass',
    color: '#FF83C4',
    title: 'Sass'
  }
]

const FindMe = forwardRef((props, ref) => {
  const dynamicRef = useLottie(yellowMan)

  return (
    <div className={style.wrap} ref={ref}>
      <div className={style.top}>
        <div className={style.info}>
          <div className={style.title}>找到我</div>
          <div className={style.list}>
            <Space size={'middle'} direction="vertical">
              {list.map((item, index) => {
                return (
                  <div className={style.item} key={index}>
                    <IconFont type={item.icon} className={style.icon} />
                    {item.link && (
                      <span
                        className={style.link}
                        onClick={() => {
                          window.open(item.link)
                        }}
                      >
                        {item.link}
                      </span>
                    )}
                    {item.desc && <span className={style.desc}>{item.desc}</span>}
                  </div>
                )
              })}
            </Space>
          </div>
        </div>
        <div className={style.dynamic} ref={dynamicRef}></div>
      </div>
      <div className={style.bottom}>
        <div className={style.tech}>
          <Space size={'middle'}>
            <span className={style.text}>网站使用：</span>

            {techList.map((item, index) => {
              return (
                <Tooltip title={item.title} color={item.color} key={index}>
                  <IconFont type={item.icon} />
                </Tooltip>
              )
            })}
          </Space>
        </div>
      </div>
    </div>
  )
})

export default FindMe
