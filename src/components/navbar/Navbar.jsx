import React from 'react'
import { RostroPerfil } from './Pictures/RostroPerfil'
import { CartWidget } from '../cartWidget/CartWidget.jsx'
import './navbar.scss'
import { navLinks } from '../../Mocks/navlinks.js'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext.jsx'
import { useContext } from 'react'

export const Navbar = () => {

  const { user, logout } = useContext(UserContext)

  return (
    <nav className='bg-slate-800 flex justify-center px-10'>
      <h1 className='m-4 text-stone-50 w-1/3 min-w-min font-light'><Link to="/">CyberCart Haven</Link></h1>
      <div className='w-1/3 flex justify-center min-w-min'>
        <ul className='text-stone-50 flex items-center'>
          {navLinks.map((link) => (
            <li className='m-4' key={link.id}><Link to={link.href}>{link.label}</Link></li>
          ))}
        </ul> 
      </div>
      <div className='text-stone-50 w-1/3 min-w-min flex justify-end'>
        <div className='flex gap-2 items-center'>
          <button><RostroPerfil /></button>
          { user.log && 
            <div className='flex gap-2'>
              <p>{user.email}</p>
              <button onClick={logout}>Cerrar Sesion</button>
            </div> }
          <button className='ms-4' href="#"><Link to="/cart"><CartWidget /></Link></button>
        </div>
      </div>
    </nav>
  )
}
