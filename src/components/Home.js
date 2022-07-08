import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Home(){
  return(
   <MainStyle>
     <h1></h1>
   </MainStyle>
  )
}



const MainStyle=styled.div`
  background-color:#1E1F28;
  color:#FFF;
`