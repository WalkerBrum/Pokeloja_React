import './Header.scss';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Nav } from '../Nav';
import { useDispatch, useSelector } from 'react-redux';
import { cartOpen, setPokeNameForSearch } from '../../store';


export function Header() {

    const dispatch = useDispatch();
    const { items: pokemons } = useSelector(state => state.cart);

    return (
        <header className='header'>
            <div className='navegation'>
                <img className='logo' src={logo} alt='Pokémon'/>
                <Nav className='nav-header'/>
                <div className='cart-division'>
                    {pokemons.length > 0 && <span className='cart-count'>{pokemons.length}</span>}
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className='acess-cart'
                        onClick={() => dispatch(cartOpen())}
                    />
                </div>
            </div>
            <div className='search'>
                <input 
                    type='text' 
                    placeholder='Encontre o seu pokémon'
                    onChange={(event) => dispatch(setPokeNameForSearch(event.target.value))}/>
                <FontAwesomeIcon className='fa-search' icon={faSearch} />
            </div>
        </header>
    )
}