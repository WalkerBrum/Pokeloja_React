import './Footer.scss';
import { navItens } from '../Nav/navItens';
import { footer } from './footerItens';

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <div>
                    <ul className='acessos-footer'>
                        {navItens.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div>
                <ul className='acessos-footer'>
                    {footer.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <p className='info'>2021 PokéLoja 2022. Todos os direitos reservados</p>
        </footer>
    )
}