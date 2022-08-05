import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        open: false,
        items: [],
    },
    reducers: {
        cartOpen: state => {
            state.open = true;
        },
        cartClose: state => {
            state.open = false;
        },
        addToCart: (state, action) => {
            state.items.push({
                qnty: 1,
                ...action.payload,
              });

              //console.log("Pokemons: " + JSON.stringify(state.items))
        }
    }    
});

export const { cartOpen, cartClose, addToCart } = counterSlice.actions;

export default configureStore({
    reducer: {
      cart: counterSlice.reducer,
    }
});