import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Home from "./components/Home.js"
import Product from "./components/Product.js"
import Cart from "./components/Cart.js"
import CheckOut from "./components/CheckOut.js"
import data from './data/Data.js'
import UserContext from "./contexts/UserContext"

function App(){

  const [info, setInfo] = useState({});
  const [cartItems,setCartItems]=React.useState([])
  const contextValue = {info, setInfo}
  const { products } = data
  console.log(products)
  console.log(cartItems)
  const onAdd=(product)=>{
    const exist=cartItems.find(x=>x.id===product.id)

    if(exist){
      setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty:exist.qty+1}: x))
    }
    else{
      setCartItems([...cartItems,{...product,qty:1}])
    }
  }
  
  localStorage.setItem('teste',cartItems)
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product' element={<Product onAdd={onAdd} products={products}/>}/>
            <Route path='/cart' element={<Cart onAdd={onAdd} cartItems={cartItems} />}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;