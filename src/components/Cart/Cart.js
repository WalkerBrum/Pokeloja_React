import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from '../../store';

export function Cart() {
    
    const cartState = useSelector(state => state.cart.open);
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
            </div>
        </div>
    )
}