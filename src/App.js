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

function App(){

  const [info, setInfo] = useState({});
  const [cartItems,setCartItems]=React.useState([])
  const contextValue = {info, setInfo}
  const [local, setLocal] = useState({})
  const [products, setProducts] = useState([]);
  console.log(products)

  
  
  return (
    <UserContext.Provider value={{contextValue, products,setProducts,local,setLocal, cartItems, products, setCartItems,info, setInfo}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product' element={<Product  />}/>
            <Route path='/cart' element={<Cart3  />}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;