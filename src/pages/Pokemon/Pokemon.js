import './Pokemon.scss';
import { PokemonApi } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export function Pokemon() {
    const { id } = useParams()

    const [state, setState] = useState({
        weight: 0,
        height: 0,
        abilities: [],
        moves: [],
        stats: [],
        types: [],
    });

    useEffect(() => {
        PokemonApi.getPokemonById(id).then(({ data }) =>{
            window.scrollTo(0, 0);
            setState(data);
        })
    }, [id]);

    const filtro = state.moves.filter(function(move, index) {
        if (index <= 20) {
            return move;
        }
    })

    return (
        <div className='pokemon'>
            <div className='poke-ajuste'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.id}.png`} alt={state.name} />
                <div className='poke-info'>
                    <h1 className='name-pokemon'>{String(state.name)}</h1>
                    <p className='peso'>Peso: {state.weight / 10} kg</p>
                    <p className='altura'>Altura: {state.height / 10} m</p>
                    <h3>Tipos</h3>
                    <ul className='type'>
                        {state.types.map(({ type }, index) => 
                        <li key={index}>
                            {type.name}
                        </li>)}
                    </ul>
                    <h3>Status</h3>
                    <ul>
                        {state.stats.map((stat, index) =>
                        <li key={index}>
                            {stat.stat.name} - {stat.base_stat} 
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className='poke-mov-hab'>
                <div className='movimentos'>
                    <h3>Movimentos</h3>
                    <ul>
                        {filtro.map(({ move }, index) =>
                        <li key={index}>
                            {move.name}
                        </li>)}
                    </ul>
                </div>
                <div className='habilidades'>
                    <h3>Habilidades</h3>
                    <ul>
                        {state.abilities.map(({ ability }, index) =>
                        <li key={index}>
                            {ability.name}
                        </li>)}
                    </ul>
                </div>
            </div>      
        </div>
    )
}