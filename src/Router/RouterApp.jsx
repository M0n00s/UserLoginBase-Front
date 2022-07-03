import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from '../Components/Login/Login';
import { HomePage } from '../Components/Page/HomePage/HomePage';

export const RouterApp = () => {
 const auhtStatus = 'not-authenticated';

  return (
    <>
        <Routes >
          {
            auhtStatus === 'not-authenticated' 
            ? <Route path='/login' element={ <Login />}/>
            : <Route path='/*' element={ <HomePage />} />
          }
          <Route path='/*' element={ <Navigate to='/login' />} />
        </Routes>
    </>
  )
}
