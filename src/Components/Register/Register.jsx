import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../store/user/useAuthStore';

const registerForm = {
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    password2:''
}

export const Register = () => {

    const {formState, email,  firstName, lastName, password,password2, onInputChange} = useForm(registerForm);
    const { startRegister, errorMsg } = useAuthStore();


  const onRegisterSubmit = (e) => {
    e.preventDefault()
    if(password !== password2){
        return Swal.fire('Error de authenticacion', 'las contraseñas no coinciden', 'error' )
    }
    startRegister({email,firstName,lastName,password})
  }   

  useEffect(() => {
    if(errorMsg !== undefined){
      Swal.fire('Error en la Autenticacion', errorMsg, 'error' )
    }
  }, [errorMsg])

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
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control input_text_styled"  
            placeholder='confirm password' 
            name='password2' 
            value={password2}
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
