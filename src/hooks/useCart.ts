import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import type { Product } from '../types'

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')

  const { state, dispatch, totalItems, totalPrice } = ctx

  function addItem(product: Product, size: string) {
    dispatch({ type: 'ADD_ITEM', payload: { product, size } })
  }
  function removeItem(productId: string, size: string) {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size } })
  }
  function updateQty(productId: string, size: string, quantity: number) {
    dispatch({ type: 'UPDATE_QTY', payload: { productId, size, quantity } })
  }
  function clearCart() {
    dispatch({ type: 'CLEAR_CART' })
  }
  function openCart() {
    dispatch({ type: 'ADD_ITEM', payload: { product: state.items[0]?.product, size: state.items[0]?.selectedSize ?? '' } })
  }
  function isInCart(productId: string, size?: string) {
    if (size) return state.items.some(function(i) { return i.product.id === productId && i.selectedSize === size })
    return state.items.some(function(i) { return i.product.id === productId })
  }

  return {
    items: state.items,
    isOpen: state.isOpen,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    openCart,
    isInCart,
  }
}