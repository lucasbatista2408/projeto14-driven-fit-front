import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { CartState } from '../contexts/Context'
import Header from "./Header";
import Oneproduct from "./Oneproduct";
import './testStyle.css'
export default function Product(){

  const { state: {products} } = CartState();
  console.log(products)

  return    <div><Header />
   <div className="back-ground-dark">Adicione produtos ao carrinho</div>
  <div className="home">
   
     <div className="containerofProducts">
       {
         products.map((prod)=>{
         return <Oneproduct prod={prod} key={prod.id}/>
         })
       }
     </div>
     </div></div>
   
  
 
}



const MainStyle=styled.div`
  background-color:#1E1F28;
  color:#FFF;
`