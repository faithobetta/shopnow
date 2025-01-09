
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import OrderConfirmation from "./pages/OrderConfirmation"
import FilterData from "./pages/FilterData"


function App() {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/shop" element={< Shop />}></Route>
        <Route path="/cart" element={< Cart />}></Route>
        <Route path="/checkout" element={< Checkout setOrder={setOrder}/>}></Route>
        <Route path="/orderConfirmation" element={< OrderConfirmation order={order}/>}></Route>
        {/* <Route path="/login" element={< Login />}></Route> */}
        {/* <Route path="/signup" element={< Signup />}></Route> */}
        <Route path="/filterData" element={< FilterData />}></Route>
      </Routes>
    
    <Footer />
    </BrowserRouter>
  )
}

export default App
