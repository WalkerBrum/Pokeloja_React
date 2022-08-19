import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        open: false,
        items: [],
        total: 0,
        pokeNameForSearch: '',
    },
    reducers: {
        cartOpen: state => {
            state.open = true;
        },
        cartClose: state => {
            state.open = false;
        },
        cartValueTotal: state => {
            state.total = state.items.reduce((acumulador, item) => acumulador + item.price * item.qnty, 0);
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
        },
        deleteToCart: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {

                if (state.items[i].id === action.payload) {
                    state.items.splice(i, '1');
                }
            }
        },
        moreQnty: (state, action) => {
            state.items.map((pokemon) => {

                if (pokemon.id === action.payload) {
                    pokemon.qnty += 1;
                }

                return pokemon;
            });
        },
        lessQnty: (state, action) => {
            state.items.map((pokemon) => {

                if (pokemon.id === action.payload && pokemon.qnty > 1) {
                    pokemon.qnty -= 1;      
                }

                return pokemon;
            });
        },
        setPokeNameForSearch: (state, action) => {
            state.pokeNameForSearch = action.payload
        }
    }    
});

export const { cartOpen, cartClose, addToCart, moreQnty, lessQnty, deleteToCart, cartValueTotal, setPokeNameForSearch } = counterSlice.actions;

export default configureStore({
    reducer: {
      cart: counterSlice.reducer,
    }
});