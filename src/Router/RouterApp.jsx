import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../Components/Login/Login';
import { HomePage } from '../Components/Page/HomePage/HomePage';

export const RouterApp = () => {
  return (
    <>
        <Routes >
            <Route path='/login' element={ <Login />}/>
            <Route path='/*' element={ <HomePage />} />
        </Routes>
    </>
  )
}
