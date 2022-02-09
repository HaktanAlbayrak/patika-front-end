import { configureStore } from '@reduxjs/toolkit'
import shoppingSlice from './shoppingSlice'

export const store = configureStore({
    
    reducer:{
        shopp:shoppingSlice,
    }
})