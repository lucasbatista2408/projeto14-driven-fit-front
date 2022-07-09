import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../contexts/Context'
export default function Oneproduct({prod}) {

    const { state:{cart}, dispatch} = CartState()

    console.log(cart)
  return (
    <div className='productClass'>
        <Card>
            <Card.Img variant='top' src={prod.image}></Card.Img>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>{prod.price}</span>
                </Card.Subtitle>
                {
                    cart.some(item=>item.id===prod.id)?(
                        <Button variant='danger' onClick={()=>{
                            dispatch({
                                type:'REMOVE',
                                payload:prod
                            })
                        }}>
                        Remover do carrinho
                    </Button>
                    )
                    : 
                    
                    (
                        <Button onClick={()=>{
                            dispatch({
                                type:'ADD',
                                payload:prod
                            })
                        }}>
                        Adicionar ao carrinho
                    </Button>
                    )
                }
          

               
            </Card.Body>
        </Card>
    </div>
  )
}
