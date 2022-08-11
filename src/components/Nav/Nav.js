import './Nav.scss';
import { Link } from 'react-router-dom';


export function Nav({ className }) {
    return (
        <div className='nav'>
            <ul className={className}>
                <li>
                    <Link to={'/'} className='home'>
                        <span>Home</span>
                    </Link>
                </li>
                <li className='sobre'>
                    <Link to={'/sobre'}>
                        <span>Sobre</span>
                    </Link>
                </li>
                <li className='contato'>
                    <Link to={'/contato'}>
                        <span>Contato</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}