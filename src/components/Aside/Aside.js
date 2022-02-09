import './Aside.scss';
import aside from '../../assets/images/aside.jpg'

export function Aside() {
    return (
        <aside className="aside">
            <img src={aside} alt='Capa Pokémon' />
        </aside>
    )
}