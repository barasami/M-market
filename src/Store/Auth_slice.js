import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:'auth',
    initialState:{isloggedIn : true},
    reducers:{
        login (state){
            state.isloggedIn=true
        },
        logout (state){
            state.isloggedIn =false
        },
    }

})
export const authActions=authSlice.actions;
export default authSlice