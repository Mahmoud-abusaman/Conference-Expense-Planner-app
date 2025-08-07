// src/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  items: [],
  length:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.length++
    },
    removeFromCart(state, action) {
      const existing = state.items.find((item) => item.name === action.payload);
      state.items = state.items.filter((item) => item.name !== action.payload);
 
      state.length-=existing.quantity;
    },
    increase(state, action) {
      const item = state.items.find((i) => i.name === action.payload);
      if (item) {item.quantity += 1;
      state.length++}
    },
    decrease(state, action) {
      const item = state.items.find((i) => i.name === action.payload);
      if (item && item.quantity > 1) {item.quantity -= 1;
      state.length--}
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;