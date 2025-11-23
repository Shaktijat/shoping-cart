import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempItem: [],
  totalPrice: 0,    
};  
const cartSlice = createSlice({ 
    name: "cart",
    initialState, 
    reducers: { 
        addToCart: (state, action) => { 
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }else { 
                action.payload.quantity = 1;
            }
         state.items.push({...action.payload});
        }
    },
});
export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;