import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addToCart:(state,action) =>{
                const existingItem = state.items.find(item => item.id === action.payload.id);
      
                if (existingItem) {
                  // If item exists, increase quantity
                  existingItem.quantity += 1;
                } else {
                  // If new item, add with quantity 1
                  state.items.push({...action.payload, quantity: 1});
                }
            },
            removeFromCart:(state,action)=>{
                const itemId = action.payload
                const exsistingItem = state.items.find(item=> item.id ===itemId)
                if(exsistingItem){
                    if(exsistingItem.quantity === 1){
                        state.items = state.items.filter(item => item.id != itemId)
                    }else{
                        exsistingItem.quantity -=1;
                    }
                }
            },
            clearCart:(state)=>{
                state.items.length =0; //[]
            }
        }
    }
)

export const{addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;