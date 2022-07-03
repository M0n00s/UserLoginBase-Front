import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../store/user/useAuthStore';

import './login.css';

const loginFormFields = {
  email: '',
  password: ''
}


export const Login = () => {

  const { formState, email, password, onInputChange } = useForm(loginFormFields)
  const { startLogin, errorMsg } = useAuthStore()

  const onLoginSubmit = (e) => {
    e.preventDefault();
    startLogin(formState)

  }

  useEffect(() => {
    if(errorMsg !== undefined){
      Swal.fire('Error en la Autenticacion', errorMsg, 'error' )
    }
  }, [errorMsg])
  

  return (
    <div className="containerMod all_vh">
      <form onSubmit={onLoginSubmit}>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control input_text_styled"  
            placeholder='email' 
            name='email' 
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control input_text_styled"  
            placeholder='password' 
            name='password' 
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button 
          
          type="submit" 
          className="full_with btn btn-primary">
            Submit
        </button>
      <Link className='link' to='/register'> no tienes cuenta? - Registrase</Link>     
      </form>
    </div>
  )
}