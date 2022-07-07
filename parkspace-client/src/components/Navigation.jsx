import React from 'react'
import {
  Link
} from "react-router-dom";

import App from '../App';

function Navigation() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
         <Link to='/' className='navbar-brand'>
            <img src='favicon.ico' width="50" height="50" className="d-inline-block align-top" alt=""></img>
         </Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </nav>
    </>
  )
}


export default Navigation