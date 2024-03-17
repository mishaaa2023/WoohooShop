import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ShopPage from '../pages/ShopPage'
import Cart from '../pages/Cart'









const router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/about"element={<AboutPage/>}/>
      <Route path="/Contact"element={<ContactPage/>}/>
      <Route path="/Shopnow"element={<ShopPage/>}/>
      <Route path="/cart"element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default router