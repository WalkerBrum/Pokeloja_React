import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export const PokemonApi = {
    listPokemons: (offset = 0, limit = 20) => {
        return axios.get('/pokemon', {
            params: {
                offset,
                limit,
            }
        });
    },
    filterListPokemons: () => {
        return axios.get('/pokemon/?offset=20&limit=9999');
    },
    getPokemonById: (id) => {
        return axios.get(`/pokemon/${id}`);
    }
};
