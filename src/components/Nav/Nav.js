import './Nav.scss';

export const navItens = [
    'Home', 
    'Sobre', 
    'Contato'
]

export function Nav() {
    return (
        <ul className="acessos-menu">
            {navItens.map((item, index) => <li key={index} ><a href='#'>{item}</a></li> )}
        </ul>
    )
}