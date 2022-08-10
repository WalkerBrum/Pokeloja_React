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

            state.total = state.items.reduce((acumulador, item) => acumulador + item.price * item.qnty, 0);
        },
        deleteToCart: (state, action) => {
            const hasPokemonsAdd = state.items.findIndex((pokemon) => pokemon.id === action.payload);

            state.items.slice(hasPokemonsAdd);
        },
        moreQnty: (state, action) => {
            state.items = state.items.map((pokemon) => {

                if (pokemon.id === action.payload) {

                    pokemon.qnty += 1;

                    state.total = state.items.reduce((acumulador, item) => acumulador + item.price * item.qnty, 0);       
                }

                return pokemon;
            });
        },
        lessQnty: (state, action) => {
            state.items = state.items.map((pokemon) => {

                if (pokemon.id === action.payload && pokemon.qnty > 1) {

                    pokemon.qnty -= 1;

                    state.total = state.items.reduce((acumulador, item) => acumulador + item.price * item.qnty, 0);       
                }

                return pokemon;
            });
        },
    }    
});

export const { cartOpen, cartClose, addToCart, moreQnty, lessQnty, deleteToCart } = counterSlice.actions;

export default configureStore({
    reducer: {
      cart: counterSlice.reducer,
    }
});