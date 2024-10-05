import { Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import Explore from './components/ExploreMenu/Explore'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Explore/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        
      </Routes>
    </div>
  )
}

export default App