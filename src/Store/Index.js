import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth_slice";
import cartSlice from "./Cart_slice";
import notifySlice from "./Notify_slice";

const store= configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        notice:notifySlice.reducer
    }
})

export default store;