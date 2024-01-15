import { Navbar } from '../components/navbar/Navbar.jsx'
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from '../components/itemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartView } from '../components/cartView/CartView.jsx'
import { CheckOut } from '../components/checkOut/CheckOut.jsx'
import { Login } from '../components/Login/Login.jsx'
import { UserContext } from '../context/UserContext.jsx'
import { useContext } from 'react'

export const AppRouter = () => {

      const { user } = useContext(UserContext)

    return (
        <BrowserRouter>
            <Navbar />
            { user.log
            ? 
            <Routes>
                <Route path='/' element={<ItemListContainer title="Productos"/>}/>
                <Route path='/productos/:categoryName' element={ <ItemListContainer title="Productos"/>} />
                <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
                <Route path='/cart' element={<CartView />} />
                <Route path='/checkOut' element={<CheckOut />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            : 
            <Routes>
                <Route path='/login' element={ <Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
            }
        </BrowserRouter>
    )
}