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

  const URL_X='http://localhost:3017/checkout'

  const[cardData,setCardData]=React.useState({
    name:"",
    cardNumber:""
})

  const [loading, setLoading] = React.useState(false)

  function Enviar(e){
    e.preventDefault();
    setLoading(true)
    
    const promise=axios.post(URL_X,cardData);
    promise.then((response)=>{
      console.log(response.data)
      //MODAL DE SUCESSO:
    })
    promise.catch((err)=>{
      alert('não foi possivel finalizar a compra. Tente novamente');
      console.log(err)
      setLoading(false)
    })
  }

  return(
    <LoginPage>
      <h1>Finalizar pagamento</h1>

      <Form onSubmit={Enviar}>
        <input placeholder='nome'  id="name" value={
            cardData.name} onChange={(event)=>setCardData({...cardData,name:event.target.value})} required type='text' />
        <input placeholder='numero do cartao' id="cardNumber" value={cardData.cardNumber} onChange={(event)=>setCardData({...cardData,cardNumber:event.target.value})} required type='text' />
        <Button type='submit'>{loading ? <ThreeDots color='#FFF' height='13px' width='51px'/>:<div>Fechar pedido</div>}</Button>           
         </Form>


      <h4>Seus produtos:</h4>
      {cart.map((item)=>(<div key={item.id}>{item.name}</div>))}
      <div>Total: R$ {total}</div>
    </LoginPage>
  )
}


const LoginPage = styled.div`
  min-width: 350px;
  width: 100%;
  min-height: 665px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1E1F28;

  img{
    margin-bottom: 32px;
  }
  div{
    color:#FFF;
  }
  h4{
    color:#FFF;
  }
  h1{
    color:#FFF;
  }
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    color: white;
    background-color: #2A2C36;
    outline: none;
    transition: 0.5s;
    padding-left: 20px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    width: 85%;
    height: 58px;
    row-gap: 6px;
    margin-bottom: 6px;
    border: 0;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #ABB4BD;
  }
}

`
const SignUpButton = styled.div`
  width: 85%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button{
    font-size: 0.85rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-top: 4px;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: white;
  }
  ion-icon{
    margin-top: 6px;
    color: #EF3651;
    font-size: 1rem;
  }

`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    margin-top: 40px;
    width: 85%;
    height: 46px;
    border: none;
    border-radius: 26px;
    background-color: #EF3651;
    color: ${props => props.loading ? "#F2F2F2F" : "#FFFFFF"};

`