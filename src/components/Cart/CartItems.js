import './Cart.scss';
import { useDispatch } from 'react-redux';
import { moreQnty, lessQnty, deleteToCart, cartValueTotal } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export function CartItems(props) {
    
    let { item } = props;

    const dispatch = useDispatch();
    const itemId = item.id;

    const lessQntyPoke = () => {
        dispatch(lessQnty(itemId));
    }

    const moreQntyPoke = () => {
        dispatch(moreQnty(itemId));
        dispatch(cartValueTotal());
    }

    const removePoke = ()  => {
        dispatch(deleteToCart(itemId))
        dispatch(cartValueTotal());
    }
    
    return (
        <div className='cart-items'>
            <div className='cart-pokemon'>
                <img src={item.image} alt={item.name} />
                <div className='cart-data'>
                    <h4>{item.name}</h4>
                    <div className='cart-qnty-price'>
                        <div className='cart-qnty'>
                            <span className='less-qnty' onClick={lessQntyPoke}>-</span>
                            <p>{item.qnty}</p>
                            <span className='add-qnty' onClick={moreQntyPoke}>+</span>
                        </div>
                        <p className='cart-price'>R$ {item.price * item.qnty},00</p>
                    </div>
                    <FontAwesomeIcon 
                        className='fa-trash' 
                        icon={faTrash} 
                        onClick={removePoke}/>
                </div>
            </div>
        </div>
    )
}