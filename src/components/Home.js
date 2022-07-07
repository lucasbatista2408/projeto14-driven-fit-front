import styled from "styled-components"
import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import MainMenu from "./layout/MainMenu";

function Category(){

  return (
    <>
      <h1>Nome</h1>
      <ProductsCarrosel>
        <Link to={`/product`} >
          <ProductBox>
            <ProductImg src='http://ec2-54-207-222-235.sa-east-1.compute.amazonaws.com/produtos/Casual%20red%20shirt/prod-21.jpg'/>
            <h2>Titulo</h2>
            <h4>R$40,99</h4>
          </ProductBox>
        </Link>
      </ProductsCarrosel>
    </>
  );
}

export default function Home(){

  return(
    <>

      <Hero>
        <h1>DrivenFit</h1>
      </Hero>

      <Container>

        <Category />
          

        


      </Container>

      <MainMenu />
    </>
  )
}


const Hero = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1{
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    margin-top: 100px;
  }
`;
const Container = styled.div`
  box-shadow: 0px -13px 50px 10px #000000;
  min-height: 50vh;
  width: 100%;
  padding: 30px;
  h1{
    font-size: 36px;
    line-height: 42px;
    font-weight: 600;
    color: #F7F7F7;
  }
`;

const ProductsCarrosel = styled.div`
  display: flex;
`;
const ProductBox = styled.div`

  margin-right: 25px;
  color:  #F6F6F6;
  padding-bottom: 20px;
  padding-top: 20px;
  h2{
    margin-top: 5px;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;

  }
  h4{
    font-size: 14px;
    line-height: 20px;

  }
`;
const ProductImg = styled.img`
  height: 230px;
  border-radius: 10px;
`;