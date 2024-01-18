import React from 'react'
import { Image, Modal, Space, Tag } from 'antd'
import style from './css/CardModel.module.scss'

export default function CardModel(props) {
  return (
    <Modal
      title="项目详情"
      open={props.open}
      onCancel={props.close}
      width={800}
      footer={null}
      className={style.model}
    >
      <div className={style['model-title']}>
        <span>负责模块:</span>
        <p>{props.data?.module}</p>
      </div>

      <div className={style['model-title']}>
        <span>技术栈:</span>
        <Space size={[0, 8]} wrap>
          {props.data?.tech?.map((item, index) => {
            return (
              <Tag color="#F26440" key={index}>
                {item}
              </Tag>
            )
          })}
        </Space>
      </div>

      {props.data?.href && (
        <div className={style['model-title']}>
          <span>线上地址:</span>
          <a href={props.data?.href}>{props.data?.href}</a>
        </div>
      )}
      <div className={style['model-title']}>
        <span>负责模块:</span>
        <p>{props.data?.module}</p>
      </div>

      <div className={style['model-title']}>
        <span>图片展示:</span>
        <Image.PreviewGroup items={props.data?.picList}>
          <Image width={'100%'} height={'360px'} src={props.data?.coverPic} />
        </Image.PreviewGroup>
      </div>
    </Modal>
  )
}
