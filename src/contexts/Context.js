import { createContext, useReducer, useContext, useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Product from '../components/Product';
import UserContext from "../contexts/UserContext";
import { cartReducer } from './Reducer';
import axios from 'axios';

    const Cart = createContext();
    faker.seed(99) // renderiza faker apenas uma vez. 
    const Context = ({children})=>{

        //adiciona produtos aleatorios (uns 20) atraves da bilioteca faker (para teste)
        

        // const products = [...Array(20)].map(() => ({
        //     id: faker.datatype.uuid(),
        //     name: faker.commerce.product(),
        //     price: faker.finance.amount(),
        //     image: faker.image.animals(),
        //   }));
        // console.log(products)

        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(false)
        const URL = 'https://driven-fit-back.herokuapp.com/products-with-cat'
        useEffect(() => {
          const token = localStorage.getItem("token");
          const config = {
              headers: { Authorization: `Bearer ${token}` }
          };
      
          //const promise = axios.get(`${process.env.REACT_APP_DB_URL}products-with-cat`, config);
      const promise = axios.get(URL,config)
          promise.then(response => {
            setProducts(response.data);
            setLoading(true)
            
          });
        }, []);
        
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