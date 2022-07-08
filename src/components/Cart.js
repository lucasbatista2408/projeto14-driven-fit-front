import styled from "styled-components"
import React, {useState, useEffect} from "react"
import {useNavigate, Link} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import tenis from './tenis.jpeg'

export default function Cart(props){
 

const{  onRemove }=props
const { onAdd, cartItems} = useContext(UserContext);
  const [quantity,setQuantity]=React.useState(1)
  const [very,setVery]=React.useState(false)
  const [total,setTotal]=React.useState([])
 

console.log(cartItems)
const {imagem} = cartItems
console.log(imagem)

  return(
    <div className="block col-1">
      <h2>Meu carrinho</h2>
   
      {cartItems.map((item)=>{
        <div key={item.key} className="row">
          <div style={{color:"red"} }className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={()=>onAdd(item)} className="add">+</button>
            <button onClick={()=>onRemove(item)} className="remove">-</button>
          </div>
          <div className="col-2">
            {item.qty} X {item.preco}
          </div>
        </div>        
      })}
    </div>
  )
  }



const MainStyle=styled.div`
  background-color:#1E1F28;
  color:#FFF;
  min-width: 350px;
  width: 100%;
  min-height: 150px;

  h1{
    font-size:20px;
    font-weight:bold;
    text-align:center;
    padding:20px;
  }
  section{
    display:flex
  }


`

const ProductBox=styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid #2A2C36
  ;
  border-radius:8px;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.8);
  margin:0 auto;
 
  display:flex;
  object-fit: cover;
  img{
    postion:fixed;
    left:0;
    top:0;
    object-fit: fill;
  }

`
const ImageBox=styled.div`
  height:80px;
`

const ProductInfo=styled.div`
  width:70%;
  height:auto;
  margin-left:30px;

  p{
    font-size:10px;
    margin-top:2px;
  }
  p:last-child{
    font-size:16px;
    cursor:pointer;
  }
  span{
    margin-left:90px;
    right:24px;
  }
`
const TotalStyle=styled.div`
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  color:#FFF;
`
const Button=styled.div`
  height:30px;
  width:60%;
  background-color:red;
  color:#FFF;
  border-radius:0.5rem;
  margin:0 auto;
  cursor:pointer;
  padding:0.2rem;
`
