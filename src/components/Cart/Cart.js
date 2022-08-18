import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from '../../store';
import { CartItems } from './CartItems';
import { Botao } from '../Botao/Botao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export function Cart() {
    
    const { items: pokemons, open, total } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    return(
        <div>
            <div 
                className={open ? 'cart-overlay' : ''} 
                onClick={() => dispatch(cartClose())}>
            </div>
            <div className={open ? 'cart-opened' : 'cart-closed'}>
                <div className='header-cart'>
                    <h2>CARRINHO</h2>
                    <div 
                        className='close-cart'
                        onClick={() => dispatch(cartClose())}>
                            FECHAR <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                {pokemons.length > 0 && <div className='main-cart'>
                    {pokemons.map((pokemon, index) => <CartItems key={index} item={pokemon} />)}
                    <p className="cart-total"><span>Total:</span> <span>R$ {total},00</span></p>
                    <Botao className='button-finalize-purchase' texto='Finalizar Compra' /> 
                </div>}   
            </div>     
        </div>
    )
}