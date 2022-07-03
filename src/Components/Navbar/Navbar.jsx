import React from 'react'
import { useAuthStore } from '../store/user/useAuthStore';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const {user, startLogout} = useAuthStore();

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light p-3">
        {/* <div className="container-fluid"> */}
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link  to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                
            </ul>
            <form className="d-flex">
                <span className='nav-link'>Hello! {user.name}</span>
                <button onClick={startLogout} className="btn btn-outline-danger" type="submit">Logout</button>
            </form>
            {/* </div> */}
        </div>
    </nav>



    // <div>{user.name} 
    //   <button 
    //     className='btn btn-warning'
    //     onClick={ startLogout }
    //     >LogOut
    //   </button>
    // </div>
  )
}
