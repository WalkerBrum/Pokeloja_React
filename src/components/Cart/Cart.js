import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from '../../store';
import { CartItems } from './CartItems';
import { useEffect } from 'react';

export function Cart() {
    
    const cartState = useSelector(state => state.cart.open);
    const pokemons = useSelector(state => state.cart.items);
    
    useEffect(() => {
        console.log("Pokemons: " + JSON.stringify(pokemons));
    }) 
    const dispatch = useDispatch();

    return(
        <div>
            <div 
                className={cartState ? 'cart-overlay' : ''} 
                onClick={() => dispatch(cartClose())}>
            </div>
            <div className={cartState ? 'cart-opened' : 'cart-closed'}>
                <div className='header-cart'>
                    <h2>CARRINHO</h2>
                    <span 
                        className='close-cart'
                        onClick={() => dispatch(cartClose())}>
                            X
                        </span>
                </div>
                <div className='cart-titles'>
                    <h4>Nome</h4>
                    <h4>Quantidade</h4>
                    <h4>Preço</h4>
                </div>
                {pokemons.map((pokemon, index) => <CartItems key={index} item={pokemon} />)}
            </div>     
        </div>
    )
}