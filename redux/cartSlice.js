import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: []
  },

  reducers: {
    addToCart: (state, {payload}) => {
        state.cartItem.push(payload)
      },
    removeFromCart: (state, {payload}) => {
      const prevCart = [...state.cartItem, payload]
      const newCart = prevCart.filter(pld => pld.id !== payload.id);
      state.cartItem = [...newCart];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer