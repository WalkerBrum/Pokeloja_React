import './Header.scss';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Nav } from '../Nav';
import { useDispatch } from 'react-redux';
import { cartOpen } from '../../store';

export function Header() {

    const dispatch = useDispatch();

    return (
        <header className='header'>
            <div className='navegation'>
                <img className='logo' src={logo} alt='Pokémon'/>
                <Nav />
                <span className='acess-cart' onClick={() => dispatch(cartOpen())}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </div>
            <div className='search'>
                <input type='text' placeholder='Encontre o seu pokémon'/>
                <FontAwesomeIcon className='fa-search' icon={faSearch} />
            </div>
             
        </header>
    )
}