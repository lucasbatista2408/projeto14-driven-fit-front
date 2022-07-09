export const cartReducer = (state,action) =>{
    switch(action.type) {
      
            //logica para adicionar ou remover produtos do carrinho
            case "ADD":
                return {...state, cart:[...state.cart, {...action.payload, qty:1}]}

                case "REMOVE":
                    return {...state, cart:[state.cart.filter(x=>x.id!=action.payload.id)]}

                case "CHANGE_QTY":
                    return { ...state, cart:state.cart.filter(x=>x.id===action.payload.id? (x.qty=action.payload.qty) : x.qty) }
            default:
                return state
    }
}