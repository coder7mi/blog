import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import MainRouter from '../../components/mainBox/MainRouter'
import LoadComp from '../../components/mainBox/LoadComp'

const { Content } = Layout

export default function MainBox() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <LoadComp />
      ) : (
        <Layout>
          <Content>
            <MainRouter />
          </Content>
        </Layout>
      )}
    </>
  )
}
