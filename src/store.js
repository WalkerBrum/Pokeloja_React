import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        open: false,
        items: [],
        total: 0,
    },
    reducers: {
        cartOpen: state => {
            state.open = true;
        },
        cartClose: state => {
            state.open = false;
        },
        addToCart: (state, action) => {
            const hasPokemonsAdd = state.items.findIndex((pokemon) => pokemon.id === action.payload.id);

            if (hasPokemonsAdd > -1) {
                state.items[hasPokemonsAdd].qnty += 1;

            } else {
                state.items.push({
                    qnty: 1,
                    ...action.payload,
                });
            }

            state.total = state.items.reduce((acumulador, item) => acumulador + item.price * item.qnty, 0)
        },
        moreQnty: (state, action) => {
            const pokemonsSameId = state.items.findIndex((pokemon) => pokemon.id === action.payload.itemId);

            if (pokemonsSameId > -1) {
                state.items[pokemonsSameId].qnty += 1;
            }
        }
    }    
});

export const { cartOpen, cartClose, addToCart, moreQnty } = counterSlice.actions;

export default configureStore({
    reducer: {
      cart: counterSlice.reducer,
    }
});