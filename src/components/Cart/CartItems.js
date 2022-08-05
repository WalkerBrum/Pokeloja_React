import './Cart.scss';

export function CartItems(props) {
    
    const { item } = props

    return (
        <div className='cart-items'>
            <div className='cart-pokemon'>
                <img src={item.image} alt={item.name} />
                <div className='cart-data'>
                    <h4>{item.name}</h4>
                    <div className='cart-qnty-price'>
                        <div className='cart-qnty'>
                            <span className='less-qnty'>-</span>
                            <p>{item.qnty}</p>
                            <span className='add-qnty'>+</span>
                        </div>
                        <p className='cart-price'>R$ {item.price},00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}