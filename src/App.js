import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Home from "./components/Home.js"
import Product from "./components/Product.js"
import CheckOut from "./components/CheckOut.js"
import data from './data/Data.js'
import UserContext from "./contexts/UserContext"
import Cart3 from './components/Cart3.js'

import {CartProvider} from "./contexts/Cart"; 

function App(){

  const [info, setInfo] = useState({});
  const contextValue = {info, setInfo}
  const [local, setLocal] = useState({})
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems]=useState([]);
  
  return (
    <UserContext.Provider value={{contextValue, products,setProducts,local,setLocal, cartItems, products, setCartItems,info, setInfo}}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/product' element={<Product />}/>
              <Route path='/cart' element={<Cart3  />}/>
              <Route path='/checkout' element={<CheckOut/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserContext.Provider>
  )
}

export default App;