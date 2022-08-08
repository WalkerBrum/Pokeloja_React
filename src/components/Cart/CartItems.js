import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { moreQnty } from '../../store';


export function CartItems(props) {
    
    const { item } = props;

    const dispatch = useDispatch();
    const { items: pokemons } = useSelector(state => state.cart);
    const itemId = item.id

    const lessQnty = () => {
        console.log(pokemons)
        pokemons.map((pokemon) => {
            if (item.id === pokemon.id) {
                console.log(item.id)
                console.log(pokemon.id)
                console.log(pokemon.qnty)
                pokemon.qnty -=1;
            }
        })
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
                            <span className='less-qnty' onClick={lessQnty}>-</span>
                            <p>{item.qnty}</p>
                            <span className='add-qnty' onClick={moreQntyPoke}>+</span>
                        </div>
                        <p className='cart-price'>R$ {item.price},00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}