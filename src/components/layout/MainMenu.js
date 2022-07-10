import styled from "styled-components"
import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

/*Icones*/
import { IoHomeOutline, IoHomeSharp, IoLogOutOutline, IoLogOut, IoBagHandleOutline, IoBagHandleSharp} from "react-icons/io5";

export default function MainMenu({active}){

    
    return(
        <Menu>

            <Link to={`/home`}>
                <MenuItem className={active == "home" ? "active" : "" }>
                    {active == "home" ? <IoHomeSharp /> : <IoHomeOutline /> }
                    Home
                </MenuItem>
            </Link>
                       
            <Link to={`/cart`} className={active === "cart" ? "active" : "" }>
                <MenuItem>
                    {active === "cart" ? <IoBagHandleSharp /> : <IoBagHandleOutline />  }
                    Bag
                </MenuItem>
            </Link>
            
            <Link to={`/`} >
                <MenuItem>
                    <IoLogOutOutline /> 
                    Logout
                </MenuItem>
            </Link>
            
        </Menu>
    )
  }

const Menu = styled.div`
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #1E1F28;
    filter: drop-shadow(0px -4px 20px #1A1B20);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 15px;
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    line-height: 26px;
    z-index: 100;
    a{
        text-decoration: none;
        
    }
`;
const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ABB4BD;
    &.active{
        color: #EF3651;
    }
    svg{
        font-size: 30px;
    }
`;