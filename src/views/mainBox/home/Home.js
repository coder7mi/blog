import React, { useState, useRef } from 'react'
import style from './Home.module.scss'
import { CaretRightOutlined, DesktopOutlined, MobileOutlined } from '@ant-design/icons'
import { Collapse, theme, Card, Col, Row, Image, Tooltip } from 'antd'
import user_pic from '../../../static/img/user.jpg'
import gmf_PC from '../../../static/img/gmf-pc.png'
import gmf_mobile from '../../../static/img/gmf-mobile.png'
import gmf_admin from '../../../static/img/gmf-admin.png'
import gmf_admin_detail from '../../../static/img/gmf-admin-detail.png'
import uca_admin_1 from '../../../static/img/uca-admin-1.png'
import uca_admin_2 from '../../../static/img/uca-admin-2.png'
import uca_admin_3 from '../../../static/img/uca-admin-3.png'
import uca_admin from '../../../static/img/uca-admin.png'
import uca_pc_1 from '../../../static/img/uca-pc-1.png'
import uca_pc_2 from '../../../static/img/uca-pc-2.png'
import uca_pc from '../../../static/img/uca-pc.png'
import CardModel from '../../../components/mainBox/CardModel'
import ToTopBtn from '../../../components/mainBox/ToTopBtn'
import TopHeader from '../../../components/mainBox/home/TopHeader'
import FindMe from '../../../components/mainBox/home/FindMe'

const { Meta } = Card

// 关于-Collapse组件
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'web网页开发',
    children: (
      <div className={style['collapse-item']}>
        <div className={`${style['collapse-icon']} ${style['web']}`}>
          <DesktopOutlined />
        </div>

        <div className={style['collapse-text']}>
          我的主要职责是设计、开发和维护吸引人且功能强大的Web网页。利用最新的前端技术，我负责将设计团队的创意视觉转化为实际可用的交互式网站。我在HTML、CSS和JavaScript等核心技术上有深厚的基础，通过运用框架和库如React或Vue，我能高效地构建响应式和用户友好的界面。
        </div>
      </div>
    ),
    style: panelStyle
  },
  {
    key: '2',
    label: '移动端网页开发',
    children: (
      <div className={style['collapse-item']}>
        <div className={`${style['collapse-icon']} ${style['mobile']}`}>
          <MobileOutlined />
        </div>

        <div className={style['collapse-text']}>
          在移动端开发中，我特别重视对不同机型和屏幕尺寸的适配工作。通过灵活运用媒体查询（Media
          Queries）、弹性布局（Flexbox）和网格布局（CSS
          Grid），我确保网页在各种设备上都能保持完美的布局和功能，无论是在小屏幕的手机上还是大屏幕的平板上，并利用Viewport和相对单位等技术，进一步优化网页在不同分辨率和屏幕比例上的显示效果。
        </div>
      </div>
    ),
    style: panelStyle
  }
]

export default function Home() {
  // 关于-Collapse组件
  const { token } = theme.useToken()
  const panelStyle = {
    marginBottom: 20,
    background: '#fff',
    borderRadius: token.borderRadiusLG,
    border: '1px solid #0d2f3f36'
  }

  // 项目-Model组件
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modelData, setModelData] = useState({})

  // 项目-Card组件数据
  const cardList = [
    {
      id: '1',
      src: gmf_PC,
      title: '上汽融资租赁官网',
      desc: 'web&mobile',
      model: {
        module: '网页的开发和联调',
        tech: ['Nuxt', 'TypeScript', 'Element Plus', 'Pinia', 'Sass', 'Yarn'],
        coverPic: gmf_mobile,
        picList: [gmf_PC, gmf_mobile],
        href: 'https://www.saicgmf.com/'
      }
    },
    {
      id: '2',
      src: gmf_admin,
      title: '上汽融资租赁后台管理系统',
      desc: 'web',
      model: {
        module: '登录页面、修改密码',
        tech: ['Vben', 'Pnpm'],
        coverPic: gmf_admin,
        picList: [gmf_admin, gmf_admin_detail]
      }
    },
    {
      id: '3',
      src: uca_admin,
      title: 'XEV二手车后台管理系统',
      desc: 'web',
      model: {
        module: '整车仓库、整车库存、整车出入库、订单管理',
        tech: ['Vue3', 'TypeScript', 'Element Plus', 'Vuex', 'Npm'],
        coverPic: uca_admin_1,
        picList: [uca_admin_1, uca_admin_2, uca_admin_3]
      }
    },
    {
      id: '4',
      src: uca_pc,
      title: 'XEV二手车官网',
      desc: 'web',
      model: {
        module: '个人中心',
        tech: ['Vue3', 'TypeScript', 'Element Plus', 'Vuex', 'Npm'],
        coverPic: uca_pc_1,
        picList: [uca_pc_1, uca_pc_2]
      }
    }
  ]

  const showModal = (index) => {
    setIsModalOpen(true)
    setModelData(cardList[index]?.model)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  // 回到顶部
  const startRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const findMeRef = useRef(null)
  const handleStart = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={style.home}>
      {/* 头部 */}
      <TopHeader eleList={[startRef, aboutRef, projectRef, findMeRef]} />
      {/* 开始 */}
      <div className={style.start} ref={startRef}>
        <Tooltip title="画师：X @avogado6" color="#EDB33C">
          <img className={style.img} src={user_pic} alt="头像" />
        </Tooltip>
        <div className={style.desc}>
          <div className={style.title}>你 好，我 是 青 弥</div>
          <div className={style.text}>
            一个前端工程师，使用Vue/React构建网页应用。 爱好音乐、美剧、游戏。
          </div>

          <div className={style.button} onClick={() => handleStart()}>
            Let's start!
          </div>
        </div>
      </div>

      {/* 关于 */}
      <div className={style.about} ref={aboutRef}>
        <div className={style.subTitle}>我能够做什么？</div>

        <Collapse
          className={style.collapse}
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer
          }}
          items={getItems(panelStyle)}
        />
      </div>

      {/* 项目 */}
      <div className={style.project} ref={projectRef}>
        <div className={style.subTitle}>个人项目</div>

        <Row gutter={[20, 20]}>
          {cardList.map((item, index) => {
            return (
              <Col span={8} key={item.id}>
                <Card hoverable cover={<Image width={'100%'} height={'270px'} src={item.src} />}>
                  <Meta
                    className={style['card-meta']}
                    title={item.title}
                    description={item.desc}
                    onClick={() => showModal(index)}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>

        <CardModel open={isModalOpen} close={() => handleCancel()} data={modelData} />
      </div>

      {/* 找我 */}
      <FindMe ref={findMeRef} />

      <ToTopBtn ele={startRef} />
    </div>
  )
}
