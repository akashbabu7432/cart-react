import { createSlice } from "@reduxjs/toolkit";
const carttSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            const existingproduct = state.find(item=>item.id===action.payload.id)
            if(existingproduct){
                existingproduct.quantity +=1
                existingproduct.totalprice = existingproduct.price * existingproduct.quantity
                const remainingproduct= state.filter(item=>item.id!=existingproduct.id)
                state=[...remainingproduct,existingproduct]
            }else{
                state.push({...action.payload,quantity:1 , totalprice:action.payload.price})
            }
        },

        // remove cart item

        removeCartitem:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        },

        increment:(state,action)=>{
            const existingproduct=state.find(item=>item.id==action.payload.id)
            existingproduct.quantity++
            existingproduct.totalprice=existingproduct.quantity*existingproduct.price

            const remainingproduct = state.filter(item=>item.id!=existingproduct.id)
            state= [...remainingproduct,existingproduct]


        },
        decrement:(state,action)=>{
            const existingproduct=state.find(item=>item.id==action.payload.id)
            existingproduct.quantity--
            existingproduct.totalprice=existingproduct.quantity*existingproduct.price

            const remainingproduct = state.filter(item=>item.id!=existingproduct.id)
            state= [...remainingproduct,existingproduct]


        },
        emptycart:(state)=>{
            return []
        },
    }

})


export const {addtocart,removeCartitem,increment,decrement,emptycart}=carttSlice.actions
export default carttSlice.reducer