import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../views/mainBox/home/Home'

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/blog" component={Home} />
      <Redirect from="/" to="/blog" />
    </Switch>
  )
}
