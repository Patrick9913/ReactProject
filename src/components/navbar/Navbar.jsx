import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi"
import { RostroPerfil } from './Pictures/RostroPerfil'
import './navbar.scss'

export const Navbar = () => {
  return (
    <nav className='bg-sky-950 flex justify-center px-10'>
      <h1 className='m-4 text-stone-50 w-1/3 min-w-min font-light'>CyberCart Haven</h1>
      <div className='w-1/3 flex justify-center min-w-min'>
        <ul className='text-stone-50 flex items-center'>
          <li><a className='m-4' href="#">Inicio</a></li>
          <li><a className='m-4' href="#">Productos</a></li>
          <li><a className='m-4' href="#">Nosotros</a></li>
          <li><a className='m-4' href="#">Ayuda</a></li>
        </ul> 
      </div>
      <div className='text-stone-50 w-1/3 min-w-min flex justify-end'>
        <div className='flex items-center'>
          <button><RostroPerfil /></button>
          <button className='ms-4' href="#"><PiShoppingCartLight className='text-2xl'/></button>
        </div>
      </div>
    </nav>
  )
}
