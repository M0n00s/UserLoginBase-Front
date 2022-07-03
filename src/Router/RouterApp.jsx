import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from '../Components/Login/Login';
import { HomePage } from '../Components/Page/HomePage/HomePage';
import { Register } from '../Components/Register/Register';
import { useAuthStore } from '../Components/store/user/useAuthStore';

export const RouterApp = () => {
  const {status, checkAuthToken} = useAuthStore(); 

  useEffect(()=>{
    checkAuthToken();
  },[])

  return (
    <>
        <Routes >
          {
            status === 'not-authenticated' 
            ? (<>
                <Route path='/login' element={ <Login />}/>
                <Route path='/register' element={ <Register />} />
                <Route path='/*' element={ <Navigate to='/login' />} />
              </> )
            : (<>
                <Route path='/' element={ <HomePage />} />
                <Route path='/*' element={ <Navigate to='/' />} />
              </> )
          }
          
        </Routes>
    </>
  )
}
