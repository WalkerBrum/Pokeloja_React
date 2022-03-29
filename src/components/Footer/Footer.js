import './Footer.scss';
import { navItens } from '../Nav/navItens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <div>
                    <ul className='acessos-footer'>
                        {navItens.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className='social-media'>
                    <a href='https://github.com/walkerBrum' target="_blank" rel='noreferrer' title='github'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/walkerlobato/' target='_blank' rel='noreferrer' title='linkedin'>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href='https://www.facebook.com/walker.brum' target='_blank' rel='noreferrer' title='instagram'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://www.instagram.com/brumwalker/' target='_blank' rel='noreferrer' title='facebook'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
            </div>
            <h5 className='info'>
                PokéLoja 2022. Todos os direitos reservados<br/> 
                E-commerce Project developed with React+JavaScript by Walker Brum
            </h5>
        </footer>
    )
}