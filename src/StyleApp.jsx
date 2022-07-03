import React from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { store } from './Components/store/store'
import { RouterApp } from './Router/RouterApp'
import './styleAppGlobals.css'

export const StyleApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter >
          <RouterApp />
      </BrowserRouter>
    </Provider>
  )
}
