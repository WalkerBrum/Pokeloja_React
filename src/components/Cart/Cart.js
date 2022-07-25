import './Cart.scss';
import { useSelector } from 'react-redux';

export function Cart() {
    
    const cartState = useSelector(state => state.cart.open);
    
    return(
        <div className={cartState ? 'cart-opened' : 'cart-closed'}>
            <h1>Cart</h1>
        </div>
    )
}