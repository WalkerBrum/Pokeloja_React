import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        open: false,
    },
    reducers: {
        cartOpen: state => {
            state.open = true;
        }
    }    
});

export const { cartOpen } = counterSlice.actions;

export default configureStore({
    reducer: {
      cart: counterSlice.reducer,
    }
});