import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './Router/RouterApp'

export const StyleApp = () => {
  return (
    <BrowserRouter >
        <RouterApp />
    </BrowserRouter>
  )
}
