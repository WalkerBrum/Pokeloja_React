import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { moreQnty, lessQnty } from '../../store';


export function CartItems(props) {
    
    const { item } = props;

    const dispatch = useDispatch();
    const itemId = item.id

    const lessQntyPoke = () => {
        dispatch(lessQnty(itemId));
    }

    const moreQntyPoke = () => {
        dispatch(moreQnty(itemId));
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
                </div>
            </div>
        </div>
    )
}