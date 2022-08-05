import './Cart.scss';

export function CartItems(props) {
    
    const { item } = props

    return (
        <div className='cart-items'>
            <div className='cart-pokemon'>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.qnty}</p>
                <p>R$ {item.price},00</p>
            </div>
        </div>
    )
}