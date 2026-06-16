import { createContext, useReducer } from 'react'
import type { ReactNode, Dispatch } from 'react'
import type { CartState, CartAction, CartItem } from '../types'

const initialState: CartState = {
  items: [],
  isOpen: false,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size } = action.payload
      if (!product) return { ...state, isOpen: true }
      const existing = state.items.find(function(i) {
        return i.product.id === product.id && i.selectedSize === size
      })
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(function(i) {
            return i.product.id === product.id && i.selectedSize === size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          }),
        }
      }
      const newItem: CartItem = { product, selectedSize: size, quantity: 1 }
      return { ...state, isOpen: true, items: [...state.items, newItem] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(function(i) {
          return !(i.product.id === action.payload.productId && i.selectedSize === action.payload.size)
        }),
      }
    case 'UPDATE_QTY': {
      const { productId, size, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(function(i) {
            return !(i.product.id === productId && i.selectedSize === size)
          }),
        }
      }
      return {
        ...state,
        items: state.items.map(function(i) {
          return i.product.id === productId && i.selectedSize === size
            ? { ...i, quantity }
            : i
        }),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

interface CartContextValue {
  state: CartState
  dispatch: Dispatch<CartAction>
  totalItems: number
  totalPrice: number
}

export const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const totalItems = state.items.reduce(function(sum, i) { return sum + i.quantity }, 0)
  const totalPrice = state.items.reduce(function(sum, i) { return sum + i.product.price * i.quantity }, 0)
  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}