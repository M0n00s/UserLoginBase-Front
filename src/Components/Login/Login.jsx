import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../store/user/useAuthStore';
import './login.css';

const loginFormFields = {
  email: '',
  password: ''
}


export const Login = () => {

  const { formState, email, password, onInputChange } = useForm(loginFormFields)
  const { startLogin } = useAuthStore()

  const onLoginSubmit = (e) => {
    e.preventDefault();
    startLogin(formState)

  }

  return (
    <div className="containerMod all_vh">
      <form onSubmit={onLoginSubmit}>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control"  
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
      </form>
    </div>
  )
}