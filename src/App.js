import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Home from "./components/Home.js"
import Product from "./components/Product.js"
import Cart from "./components/Cart.js"
import CheckOut from "./components/CheckOut.js"

import UserContext from "./contexts/UserContext"

function App(){

  const [info, setInfo] = useState({});
  const [storage, setStorage] = useState('')
  const contextValue = {info, setInfo, storage, setStorage }
  console.log(storage)

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;