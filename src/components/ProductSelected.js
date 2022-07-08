import React from 'react'
import {useNavigate, Link} from "react-router-dom"
import Cart from "./Cart"
export default function ProductSelected(props) {
    const navigate=useNavigate()
    const { item, onAdd }=props
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
