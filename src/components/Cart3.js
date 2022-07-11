import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { CartState } from '../contexts/Context'
import { AiFillDelete } from 'react-icons/ai'
import { ListGroup, Button, Row, Col, Form, FormControl, Image } from 'react-bootstrap'
import MainMenu from "./layout/MainMenu";
import {useCart} from "../contexts/Cart"; 

function Cart3() {
    

    const {cart, setCart} = useCart();
    
    const total = 0;
    localStorage.setItem('total',total)
    console.log(cart);
  return (
      <>
        <Header />

        <div className='home'>
            <div className='containerofCartProducts'>
                <div className="back-ground-dark">Meu carrinho</div>
                <ListGroup>
                    {   
                    cart === null ? (<div>Carregando...</div>) : (
                            cart.map(item=>(
                                <ListGroup.Item key={item._id}>
                                <Row>
                                <Col md={2}>
                                        <Image src={item.images[0]} fluid rounded />
                                    </Col>

                                    <Col md={2}>
                                        <span>{item.title}</span>
                                    </Col>

                                    <Col md={12}>
                                    <span>{item.price}</span>
                                    </Col>

                                    <Col md={2}>
                                        <FormControl as='select' value={item.qty} >
                                            
                                        </FormControl>
                                    </Col>

                                    <Button className='pink' varient='light' >
                                    <AiFillDelete />
                                    </Button>
                                </Row>
                                </ListGroup.Item>
                            ))
                        )
                    }
                </ListGroup>
            </div>

            <div className='filterStyle'>
                <span className='title'>
                    Total: {cart.length} produtos
                </span>

                <span style={{fontWeight: 700, fontSize: 21}}>Total: {total}</span>
                <Link to='/checkout'><Button disabled={cart.length===0}>Finalizar compra</Button></Link>
            </div>
        </div>
        <MainMenu active="cart"/>
    </>
  )
}

export default Cart3