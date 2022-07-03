import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';

const registerForm = {
    email:'',
    firstName:'',
    lastName:'',
    password:'',
}

export const Register = () => {

const {email, firstName, lastName, password, onInputChange} = useForm(registerForm)

  const onRegisterSubmit = (e) => {
    e.preventDefault()
  }   
  return (
    <div className="containerMod all_vh">
      <form onSubmit={onRegisterSubmit}>
      <div className="mb-3">
          <input 
            type="text" 
            className="form-control input_text_styled"  
            placeholder='first Name' 
            name='firstName' 
            value={firstName}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control input_text_styled"  
            placeholder='last Name' 
            name='lastName' 
            value={lastName}
            onChange={onInputChange}
          />
        </div>
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
      <Link className='link' to='/login'> ya tienes una cuenta? - ingresar</Link>     
      </form>
    </div>
  )
}
