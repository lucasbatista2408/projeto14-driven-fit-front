import { createContext, useReducer, useContext } from 'react'
import { faker } from '@faker-js/faker'
import Product from '../components/Product';
import { cartReducer } from './Reducer';
    const Cart = createContext();
    faker.seed(99) // renderiza faker apenas uma vez. 
    const Context = ({children})=>{

        //adiciona produtos aleatorios (uns 20) atraves da bilioteca faker (para teste)
        const products = [...Array(20)].map(() => ({
            id: faker.datatype.uuid(),
            name: faker.commerce.product(),
            price: faker.finance.amount(),
            image: faker.image.animals(),
          }));
        console.log(products)

        const [state,dispatch] = useReducer(cartReducer, {
            products:products,
            cart:[]
        })
        return <Cart.Provider value={{  state,dispatch }} >{children}</Cart.Provider>
    }

export default Context;
export const CartState=()=>{
    return useContext(Cart)
}