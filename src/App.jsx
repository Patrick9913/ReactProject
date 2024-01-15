import './App.css'
import { CartProvider } from './context/CartContext.jsx'
import { UserProvider} from './context/UserContext.jsx'
import { AppRouter } from './router/AppRouter.jsx'

function App() {

  return (
    <UserProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </UserProvider>
  )
}

export default App
