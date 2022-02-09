import './Main.scss';
import { Botao } from '../Botao/Botao';
import { PokemonApi } from '../../services/api';
import { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const name = props.name; 
    const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const price = Math.floor(name.length / 2 * 100);

    return (
        <section className='dados-pokemons'> 
            <img src={image} alt={name} className/>
            <h3 className='poke-name'>{name}</h3>
            <p className='price-from'>R$ {price},00</p>
            <p className='price-to'>R$ {price * 0.8},00</p>
            <Botao className='poke-comprar' texto='Comprar' />
        </section>
    )
}

export function Main(props) {
    const limit = 20;
    let total;

    const [state, setState] = useState({
        pokemons: [],
        currentPage: 0,
        total: 0,
        totalPages: 0,
    });

    useEffect(() => {
        PokemonApi.listPokemons(state.currentPage * limit, limit)
        .then(({ data }) => {
            setState((prev) => ({
                ...prev,
                total: data.count,
                totalPages: Math.ceil(total / limit),
                pokemons: [...prev.pokemons, ...data.results.map((pokemon, key) => <Pokemon key={key + (prev.pokemons.length + 1)} name={pokemon.name} url={pokemon.url} />)] 
            }));
        });
    }, [state.currentPage]);

    return (
        <main className='main'>
            <div className='poke-list'>
                {state.pokemons}
            </div>
        </main>
    )
}