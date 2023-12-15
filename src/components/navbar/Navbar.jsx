import React from 'react'
import { RostroPerfil } from './Pictures/RostroPerfil'
import { CartWidget } from '../cartWidget/CartWidget.jsx'
import './navbar.scss'
import { navLinks } from '../../Mocks/navlinks.js'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav className='bg-sky-950 flex justify-center px-10'>
      <h1 className='m-4 text-stone-50 w-1/3 min-w-min font-light'>CyberCart Haven</h1>
      <div className='w-1/3 flex justify-center min-w-min'>
        <ul className='text-stone-50 flex items-center'>
          {navLinks.map((link) => (
            <li className='m-4' key={link.id}><Link to={link.href}>{link.label}</Link></li>
          ))}
        </ul> 
      </div>
      <div className='text-stone-50 w-1/3 min-w-min flex justify-end'>
        <div className='flex items-center'>
          <button><RostroPerfil /></button>
          <button className='ms-4' href="#"><CartWidget /></button>
        </div>
      </div>
    </nav>
  )
}
