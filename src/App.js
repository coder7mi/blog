import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainBox from './views/mainBox/MainBox'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainBox}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
