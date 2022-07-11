import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../contexts/Context'
export default function Oneproduct({prod}) {

    const { state:{cart}, dispatch} = CartState()

    
  return (
    <div className='productClass'>
        <Card>
            <Card.Img variant='top' src={prod.image[0]}></Card.Img>
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
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
