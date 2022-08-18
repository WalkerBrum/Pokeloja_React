import './Contato.scss';
import photoPerfil from '../../assets/images/perfil-linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Contato() {
    return (
        <div className="contact">
            <h1>Contato</h1>
            <div className='profile'>
                <img src={photoPerfil} alt='Foto de Perfil Walker Lobato'></img>
                <h3>Walker Brum Lobato</h3>
                <div className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>Linkedin:
                        <a href='https://www.linkedin.com/in/walkerlobato/' target='_blank' rel='noreferrer'>
                            walkerlobato/
                        </a>
                    </span>
                </div>
                <div className='github'>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Github:
                        <a href='https://github.com/WalkerBrum' target='_blank' rel='noreferrer'>
                            WalkerBrum
                        </a>
                    </span>
                </div>
                <div className='instagram'>
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>Instagram:
                        <a href='https://www.instagram.com/brumwalker/' target='_blank' rel='noreferrer'>
                            brumwalker/
                        </a>
                    </span>
                </div>
                <div className='whatsapp'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>WhatsApp:
                        <a href='https://web.whatsapp.com/send?phone=55329817-9223' target='_blank' rel='noreferrer'>
                            (32) 998179223
                        </a>
                    </span>
                </div>
            </div>
            <div className='main-skills'>
                <h3>Sobre</h3>
                <p>Software Engineer, atualmente trabalhando como freelancer em desenvolvimento de sites e sistemas web para empresas com foco no front-end. Apaixonado por React, utilizo-o na maioria das minhas aplicações, junto com a metodologia ágil Scrum.</p>
                <h3>Hard Skills</h3>
                <ul className='hard-soft-skills'>
                    <li>ReactJs</li>
                    <li>React Redux</li>
                    <li>React DOM</li>
                    <li>React Context API</li>
                    <li>React Hooks</li>
                    <li>Styled Components</li>
                    <li>Material-UI</li>
                    <li>Axios</li>
                    <li>NextJs</li>
                    <li>JavaScript</li>
                    <li>NodeJs</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>HTML</li>
                </ul>
                <h3>Soft Skills</h3>
                <ul className='hard-soft-skills'>
                    <li>Resolução de Problemas</li>
                    <li>Flexibilidade</li>
                    <li>Liderança</li>
                    <li>Resiliência</li>
                    <li>Inteligência Emocional</li>
                    <li>Colaboração</li>
                    <li>Empatia</li>
                </ul>
            </div>
        </div>
    )
}