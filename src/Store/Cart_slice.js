import { createSlice } from "@reduxjs/toolkit";
import { notifyActions } from "./Notify_slice";




const cartSlice=createSlice({
    name:'cart',
    initialState:{
        list:[],
        Totalquantity:0,
        showcart:false,
        modify:false,

    },
    reducers:{
        changeData (state,action) {
            state.Totalquantity=action.payload.totalCost
            state.list=action.payload.list
        },
        addtoCart (state,action) {
            state.modify=true
            const newItem=action.payload
            const itExists=state.list?.find((item)=>item.id === newItem.id)

            if(itExists){
                itExists.quantity++;
                itExists.totalCost += newItem.cost;
            }
            else{
                state.list?.push({
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
            state.modify=true
            const id=action.payload
            const existing=state.list.find(item=>item.id === id)
            if(existing.quantity === 1){
                state.list=state.list.filter(item=>item === !id)
                state.Totalquantity--;
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

export const fetchData=()=>{
    return async (dispatch)=>{
        const fetchallData= async()=>{
            const res=await fetch('https://reachme-ded7b-default-rtdb.firebaseio.com/cartItems.json')
            const data= await res.json()
            return data;
        }
        try{
            const myCart=await fetchallData()
            dispatch(cartActions.changeData(myCart))
        }
        catch (err){
            dispatch(notifyActions.showNotification({
                open:true,
                message:'Request failed',
                type:'error'
            }))

        }
    }
}

export const sendCatData=(cart)=>{
    return async (dispatch)=>{
        dispatch(notifyActions.showNotification({
            open:true,
            message:'Sending Your request',
            type:'warning'
        }))
        const dataSend=async()=>{
            const resource=await fetch('https://reachme-ded7b-default-rtdb.firebaseio.com/cartItems.json',{
              method:'PUT',
              body:JSON.stringify(cart)
            })
            const mydata=await resource.json()
            dispatch(notifyActions.showNotification({
              open:true,
              message:'Request sent successfully',
              type:'success'
            }))
      
        }
        try{
            await dataSend()
        }
        catch (err){
            dispatch(notifyActions.showNotification({
                open:true,
                message:'Request failed',
                type:'error'
            }))

        }

    }

}

export const cartActions=cartSlice.actions;
export default cartSlice