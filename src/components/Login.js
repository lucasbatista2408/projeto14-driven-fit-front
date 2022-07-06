import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login(){
  
  const { setInfo } = useContext(UserContext);

  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  console.log(form)

  const navigate = useNavigate();

  function HandleLogIn(e){
    e.preventDefault();
    const URI = process.env.REACT_APP_DB_URL
    const AXIOS = `${URI}/login`
    const infoLogIn = form;
    const promise = axios.post(AXIOS, infoLogIn)
    promise.then(res => { 
      const dados = res.data;
      setInfo(dados)
      console.log(dados)
      navigate('/home')}
      )

    promise.catch(error => (
      alert("As informações digitadas estão incorretas"),
      window.location.reload(true)
      ))
  }

  function HandleClick(){
    navigate("/cadastro")
  }

  return( 
    <LoginPage>
      <Logo>
        <h1> DRIVEN-FIT </h1>
      </Logo>
      <Form>
        <input type="text" value={form.email} placeholder='email' onChange={e => setForm({...form, email: e.target.value})} required/>
        <input type="password" value={form.password} placeholder='senha' onChange={e => setForm({...form, password: e.target.value})} required/>
      </Form>
        <SignUpButton>
          <button onClick={HandleClick}>Primeira vez? Cadastre-se</button>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </SignUpButton>
        <Button onClick={HandleLogIn} type="submit">ENTRAR</Button>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  min-width: 375px;
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
`

const Logo = styled.div`
  font-family: 'Saira Stencil One', cursive;
  margin-bottom: 1.5rem;
  h1{
    font-size: 2rem;
    color: white;
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
    width: 326px;
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
  width: 75%;
  position: relative;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button{
    font-size: 0.85rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 4px;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: white;
  }
  ion-icon{
    position: fixed;
    top: 378px;
    left: 328px;
    color: #EF3651;
    font-size: 1rem;
  }

`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin-top: 40px;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 26px;
    background-color: #EF3651;
    color: ${props => props.loading ? "#F2F2F2F" : "#FFFFFF"};

`
