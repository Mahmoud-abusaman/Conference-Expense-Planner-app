import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import Shop from './pages/shop'
// import { Routes, Route } from "react-router-dom";
import './index.css';
import Cart from './pages/cart';
function App() {



  return <HashRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>

}

export default App
