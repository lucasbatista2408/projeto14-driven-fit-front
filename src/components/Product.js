import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import data from '../data/Data.js'
import ProductSelected from "./ProductSelected";
import Header from "./Header";
export default function Product(props){

  const {  products } = useContext(UserContext);


    
   return <div className="block-col-2">
      <Header />
      <h2>produtos</h2>
      <div className="row">
        {products.map((item)=>(
          <ProductSelected item={item} key={item.id} />
        ))}
      </div>
    </div>
  
 
}