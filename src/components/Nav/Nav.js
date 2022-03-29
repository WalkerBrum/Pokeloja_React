import './Nav.scss';
import { navItens } from './navItens';

export function Nav() {
    return (
        <ul className="acessos-menu">
            {navItens.map((item, index) => <li key={index} ><a href='#'>{item}</a></li> )}
        </ul>
    )
}