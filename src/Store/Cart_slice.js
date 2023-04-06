import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        list:[],
        Totalquantity:0,
        showcart:false

    },
    reducers:{
        addtoCart (state,action) {
            const newItem=action.payload
            const itExists=state.list.find((item)=>item.id === newItem.id)

            if(itExists){
                itExists.quantity++;
                itExists.totalCost += newItem.cost;
            }
            else{
                state.list.push({
                    id:newItem.id,
                    cost:newItem.cost,
                    quantity:1,
                    name:newItem.name,
                    totalCost:newItem.cost
                });
                state.Totalquantity++
            }
        },
        removefromCart (state,action) {
            const id=action.payload
            const existing=state.list.find(item=>item.id === id)
            if(existing.quantity === 1){
                state.list=state.list.filter(item=>item === !id)

            }
            else{
                existing.quantity--;
                existing.totalCost -=existing.cost
            }
        },
        setshowCart (state){
            state.showcart= !state.showcart
        }

    }
})

export const cartActions=cartSlice.actions;
export default cartSlice