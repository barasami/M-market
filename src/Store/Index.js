import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth_slice";

const store= configureStore({
    reducer:{
        auth:authSlice.reducer
    }
})

export default store;