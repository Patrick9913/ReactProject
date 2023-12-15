import { useState } from 'react'
import { Navbar } from './components/navbar/Navbar.jsx'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryName' element={ <ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
