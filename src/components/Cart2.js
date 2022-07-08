import styled from "styled-components"
import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import tenis from './tenis.jpeg'
export default function Cart2(props){
const{ cartItems, onAdd }=props
const objeto=[{
  id:1,
  name:"casaco",
  preco:24.50,
  imagem:"https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-full--p-1616792098974.jpg"
},{
id:2,
name:"calca",
preco:30.50,
imagem:"https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-full--p-1616792098974.jpg"
}]

  const [quantity,setQuantity]=React.useState(1)
  const [very,setVery]=React.useState(false)
  const [total,setTotal]=React.useState([])
  let sum=0;
  useEffect(()=>{
    objeto.forEach(element => {
      sum+=(element.preco)*quantity
    });
    setTotal(sum)
    
  },[])

  const handleQuantity=(type,index)=>{
    let verify=false;
   for(let i=0;i<objeto.length;i++){
     if(index===i){
       setVery(true)
     }
   }
    if(type==="dec" && quantity>1){
      setQuantity(quantity-1)
      console.log(index)
    }
    if(type==="inc" && very==true){
      setQuantity(quantity+1)
      console.log(index)
    }

  }

return<>
  <MainStyle>
    
  <h1>Meu carrinho</h1>
  {objeto.map((item,index)=><Ver key={item.id} item={item} index={index}/>)}

  <TotalStyle>
           <div>
             Total:
           </div>
           <div>
            {total}
           </div>
         </TotalStyle>
         <Button>Finalizar compra</Button>
  </MainStyle>

</>

  function Ver({item,index}){

    return(
      <MainStyle>
        <ProductBox>
         <img src={item.imagem}/>
         <ProductInfo>
           {item.name}
           <p>
             produto de qualidade
           </p>
             <button onClick={()=>handleQuantity("dec",index)}>-</button>   {quantity}  <button onClick={()=>handleQuantity("inc",index)}>+</button>         
             <span>R${item.preco}</span>
           
         </ProductInfo>
         </ProductBox>


      </MainStyle>
      
     )
  }
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
