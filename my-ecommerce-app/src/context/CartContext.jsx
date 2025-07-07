import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (exists) return state; // Avoid duplicates
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const cartCount = state.cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
