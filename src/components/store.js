import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    initialState : [],

    reducers : {
        addItem(state, action){
            state.push(action.payload);
        },

        deleteItem(state, action){
            state.splice(action.payload, 1);
        },

        increaseQuantity(state, action){
            state[action.payload].itemQuantity += 1;
        },

        decreaseQuantity(state, action){
            if(state[action.payload].itemQuantity > 1) {
              state[action.payload].itemQuantity -= 1;
            }
        }
      }
    
})

export let { addItem, deleteItem, increaseQuantity, decreaseQuantity } = cart.actions 

export default configureStore({
  reducer: {
    cart : cart.reducer
  }
}) 