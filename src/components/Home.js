import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import MainMenu from "./layout/MainMenu";

export default function Home(){
  return(
    <>teste
      <MainMenu />
    </>
  )
}