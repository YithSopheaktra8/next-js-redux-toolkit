import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/features/cart/cartSlice.js'
import productSlice from './features/product/productSlice';

export const store = configureStore({
    reducer :{
        cart : cartReducer,
        products : productSlice
    }
});