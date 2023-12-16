import { Navbar } from './components/navbar/Navbar.jsx'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer title="Productos"/>}/>
        <Route path='/productos/:categoryName' element={ <ItemListContainer title="Productos"/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
