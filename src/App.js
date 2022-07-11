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
import Cart3 from './components/Cart3.js'

function App(){

  const [info, setInfo] = useState({}); // SALVA O NOME DE USUARIO E TOKEN QUE VEM DO BACK
  const [local, setLocal] = useState({}); // SALVA O TOKEN QUE VEM DO LOCAL STORAGE
  const [cartItems,setCartItems]=useState([])
  const contextValue = {info, setInfo, local, setLocal }
  console.log(local)

  const onAdd=(product)=>{
    const exist=cartItems.find(x=>x.id===product.id)

    if(exist){
      setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty:exist.qty+1}: x))
    }
    else{
      setCartItems([...cartItems,{...product,qty:1}])
    }
  }
  
  
  return (
    <UserContext.Provider value={{contextValue, cartItems, onAdd, products, setCartItems}}>
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