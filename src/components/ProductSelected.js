import React from 'react'
import { useContext } from "react";
import {useNavigate, Link} from "react-router-dom"
import Cart from "./Cart"
import UserContext from "../contexts/UserContext";
export default function ProductSelected(props) {

    const navigate=useNavigate()
    
    const { item }=props
    const {  products, setCartItems, cartItems } = useContext(UserContext);

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
    <div>
        <img className='small' src={item.imagem}/>
        <h3>{item.name}</h3>
        <div>${item.preco}</div>
        <div>
            <button onClick={()=>{onAdd(item); navigate('/cart')}}>Adicionar ao carrinho</button>
            
        </div>
        
    </div>
  )
 
}
