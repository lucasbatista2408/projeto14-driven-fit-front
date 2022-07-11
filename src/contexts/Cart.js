import { createContext, useEffect, useState, useContext  } from 'react';

export const CartContext = createContext({});

export const CartProvider = (props) => { 


    
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        
         
          

         

    }, []);
    
    return(
        <CartContext.Provider value ={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);