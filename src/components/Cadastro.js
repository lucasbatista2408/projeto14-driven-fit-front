import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"
import background from "../assets/img/backsignup.png"

function Cadastro(){

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    photo: ''
  })

  const navigate = useNavigate();

  console.log(form)

  

  function SignUp(e){
    e.preventDefault();
    console.log('clicked')
    const REACT_APP_DB_URL = process.env.REACT_APP_DB_URL
    const URL = 'https://driven-fit-back.herokuapp.com/signup'
    const signUp = form;
    const promise = axios.post(URL, signUp)
    promise
    .then( res => {
      console.log(res.data)
      navigate('/')
    })
    .catch(error => 
      (console.log(error),
      alert("Revise as informações digitadas"),
      window.location.reload(true)
      ))
  }

  function HandleLogIn(){
    navigate('/')
  }

  return  (
  <SignIn>
    <Logo>
      <h1> DRIVEN-FIT </h1>
    </Logo>
    <Form>
      <input type="text" placeholder="Nome" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
      <input type="text" placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
      <input type="password" placeholder="Senha" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required/>
      <input type="password" placeholder="Confirmar Senha"  value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} required/>
      <input type="photo" placeholder="Foto (URL)"  value={form.picture} onChange={e => setForm({...form, picture: e.target.value})} required/>
      <button onClick={SignUp}>Cadastrar</button>
    </Form>
    <Button onClick={HandleLogIn}>Ja tem uma conta? Entre agora!</Button>
</SignIn>
  )
}

const SignIn = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 665px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img{
    margin-bottom: 32px;
  }
`

const Logo = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  margin-bottom: 1.5rem;
  h1{
    font-size: 2rem;
    color: white;
  } 
`

const Form = styled.form`
  font-family: 'Raleway', sans-serif;
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


  button{
    font-size: 0.85rem;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 40px;
    width: 85%;
    height: 46px;
    border: none;
    border-radius: 26px;
    background-color: #EF3651;
    color: white;
  }
`

const Button = styled.button`
    font-size: 0.85rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: white;
`

export default Cadastro;