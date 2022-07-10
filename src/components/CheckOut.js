import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { CartState } from '../contexts/Context'
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";

export default function CheckOut(){
  let total=localStorage.getItem('total');
  const { state: { cart }, dispatch } = CartState()

  const URL_X='https://www.google.com'

  const[cardData,setCardData]=React.useState({
    name:"",
    cardNumber:""
})
  const [loading, setLoading] = React.useState(false)

  function Enviar(e){
    e.preventDefault();
    setLoading(true)
    
    const promise=axios.post(URL_X,cardData)
  }

  return(
    <div>
      <h1>Finalizar pagamento</h1>

      <form onSubmit={Enviar}>
        <input placeholder='nome'  id="name" value={
            cardData.name} onChange={(event)=>setCardData({...cardData,name:event.target.value})} required type='text' />
        <input placeholder='numero do cartao' id="cardNumber" value={cardData.cardNumber} onChange={(event)=>setCardData({...cardData,cardNumber:event.target.value})} required type='text' />
        <button type='submit'>{loading ? <ThreeDots color='#FFF' height='13px' width='51px'/>:<div>Fechar pedido</div>}</button>           
         </form>

      <div>Total: R$ {total}</div>
      {cart.map((item)=>item.name)}
    </div>
  )
}