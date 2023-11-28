import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Products } from './components/products/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 className=' text-center text-3xl font-light my-7'>Productos Destacados</h1>
      <Products />
    </>
  )
}

export default App
