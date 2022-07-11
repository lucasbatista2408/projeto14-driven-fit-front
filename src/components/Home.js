import styled from "styled-components"
import React, {useState, useEffect, useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import UserContext from "../contexts/UserContext";

import { Pagination } from "swiper";

import "swiper/css";

import MainMenu from "./layout/MainMenu";

function Category({name, products}){

  return (
    <>
      
      <h1>{name}</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
      >
        
      </Swiper>
      
    </>
  );
}

export default function Home(){

  //const {user} = ???; -> Inserir dados do uusuário logado
  
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    
    const token = localStorage.getItem("token");
    
    const config = {
        headers: { Authorization: `Bearer ${token}` } // Trocar por ${user.token}
    };

    const promise = axios.get(`${process.env.REACT_APP_DB_URL}/products-with-cat`, config);

    promise.then(response => {

      setProducts(response.data);
      setProductsList(...response.data );
      console.log("================================================================productsList");
      console.log(products);
    });

 
  }, []);


  return(
      <>
        <Hero>
          <h1>DrivenFit</h1>
        </Hero>

        <Container>
          {products === null ? (<Loading>Carregando...</Loading>) : (

            products.map( category => <Category name={category.category} products={category.products}/> )
          )}
        </Container>

        <MainMenu active="home"/>
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
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #fff;
  font-size: 20px;
`;