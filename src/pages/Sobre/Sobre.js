import './Sobre.scss';


export function Sobre() {
    return (
        <div className="about">
            <div className='about-title'>
                <h1>Sobre</h1>
                <h3>Nome do projeto: PokéLoja</h3>
                <p>Aplicação web desenvolvida com ReactJs baseado em um e-commerce de pokémons voltado para a parte de front-end</p>
                <h3>Tecnologias e bibliotecas ulitizadas</h3>
                <ul className='main-tecnologies'>
                    <li>ReactJs</li>
                    <li>React Redux</li>
                    <li>React DOM</li>
                    <li>Hooks</li>
                    <li>Axios</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>HTML</li>
                    <li>Font Awesome</li>
                </ul>
            </div>
            <h3>Outros projetos do Software Engineer Walker lobato</h3>
            <div className='other-projects'>
                <iframe src="https://malanski.github.io/MyResume/" title="My Resume"></iframe>
            </div>
        </div>
    )
}