import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsInCart = state.products.some(
        product => product.id === action.payload.id
      );

      if (productIsInCart) {
        state.products = state.products.map(
          product => product.id === action.payload.id
          ? {...product, quantity: product.quantity + 1}
          : product
        );

        return;
      }

      state.products = [...state.products, {...action.payload, quantity: 1}]
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload.id
      );
    },
    incrementProduct: (state, action) => {
      state.products = state.products.map(
        product => product.id === action.payload.id
          ? {...product, quantity: product.quantity + 1}
          : product
      );
    },
    decrementProduct: (state, action) => {
      state.products = state.products.map(
        product => product.id === action.payload.id
          ? {...product, quantity: product.quantity - 1}
          : product
      ).filter(product => product.quantity > 0);
    }
  }
});

export const { 
  addProduct, 
  removeProduct,
  incrementProduct,
  decrementProduct
} = cartSlice.actions;

export default cartSlice.reducer;