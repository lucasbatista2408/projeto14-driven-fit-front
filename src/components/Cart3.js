import React from 'react'
import Header from './Header'
import { CartState } from '../contexts/Context'
import { AiFillDelete } from 'react-icons/ai'
import { ListGroup, Button, Row, Col, Form, FormControl, Image } from 'react-bootstrap'
function Cart3() {
    const { state: { cart }, dispatch } = CartState()

    const [total, setTotal] = React.useState()

    const myStock=[0,1,2,3,4,5];

    React.useEffect(()=>{
        setTotal(cart.reduce((previousValue,currentValue)=>previousValue+Number(currentValue.price)*currentValue.qty,0))
    },[cart])

  return (
      <>
      <Header />
      <div className='home'>
    <div className='containerofCartProducts'>
    <ListGroup>
            {
                cart.map(item=>(
                    <ListGroup.Item key={item.id}>
                    <Row>
                    <Col md={2}>
                            <Image src={item.image} fluid rounded />
                        </Col>

                        <Col md={2}>
                            <span>{item.name}</span>
                        </Col>

                        <Col md={12}>
                           <span>{item.price}</span>
                        </Col>

                        <Col md={2}>
                            <FormControl as='select' value={item.qty} onChange={(e)=>dispatch({
                                type: 'CHANGE_QTY',
                                payload:{
                                    id:item.id,
                                    qty:e.target.value
                                }
                            })}>
                                {
                                    myStock.map((x)=>(<option>{x+1}</option>))
                                }
                            </FormControl>
                        </Col>

                        <Button varient='light' onClick={()=> dispatch({
                            type:'REMOVE',
                            payload:item
                        })}>
                        <AiFillDelete />
                        </Button>
                    </Row>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </div>

    <div className='filterStyle'>
            <span className='title'>
                Total: {cart.length} produtos
            </span>

            <span style={{fontWeight: 700, fontSize: 21}}>Total: {total}</span>
            <Button disabled={cart.length===0}>Finalizar compra</Button>
    </div>
    </div>
    </>
  )
}

export default Cart3