import React from 'react'
import { Container, Navbar, Nav, Badge, Dropdown, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { CartState } from '../contexts/Context'
import { Link } from 'react-router-dom'
export default function Header() {

    //pega o cart de CartState
    const { state:{cart} } = CartState() 

  return ( <Navbar bg='dark' varient='dark' style={{height: 80}}>
      <Container>
          <Navbar.Brand  style={{color: 'white'}}>Driven Fit</Navbar.Brand>
          <Nav>
              <Dropdown alignRight>
                  <Dropdown.Toggle varient='success'>
                      {<FaShoppingCart color='white' fontSize='25px'/>}
                      <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{minWidth: 370}}>
                      {cart.length> 0 ? 
                        (<>
                            <Link to='/cart'><Button >Finalizar compra</Button></Link>
                        </>) : <span>carrinho vazio</span>
                        }
                  </Dropdown.Menu>
              </Dropdown>
          </Nav>
      </Container>
  </Navbar>

  )
}
