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
                state.items.push({...action.payload, quantity: 1});
            }
         state.tempItem = [...state.items];
         state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action) => { 
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.tempItem = [...state.items];
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateTempQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === id);  
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
            state.tempItem = [...state.items];
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }   

    },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateTempQuantity } = cartSlice.actions;