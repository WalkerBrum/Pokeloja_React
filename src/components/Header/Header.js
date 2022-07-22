import './Header.scss';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Nav } from '../Nav';

export function Header() {
    return (
        <header className='header'>
            <div className='navegation'>
                <img className='logo' src={logo} alt='Pokémon'/>
                <Nav />
                <span className='acess-cart'>
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