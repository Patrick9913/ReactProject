import { useState } from 'react'
import { Navbar } from './components/navbar/Navbar.jsx'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer title="Productos Destacados"/>
    </>
  )
}

export default App
