import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import cartReducer from "../utils/cartSlice"
const appStore = configureStore({
    reducer:{
     user:userReducer,
     cart:cartReducer
    }
})

export default appStore;