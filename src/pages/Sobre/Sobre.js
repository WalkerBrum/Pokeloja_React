import './Sobre.scss';


export function Sobre() {
    return (
        <div className="about">
            <h1>Sobre</h1>
            <div className='about-title'>
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
                <h4>Buscador de Perfil GitHub: 
                    <a href='https://github.com/WalkerBrum/search-github-profile-react' alt='Buscador de Perfil GitHub' target='_blank' rel='noreferrer'>Repositório</a>
                </h4>
                <iframe src='https://buscador-perfis-github.vercel.app/' title='Buscador de Perfil GitHub'></iframe>
                <h4>Pomodoro Timer Concentration: 
                    <a href='https://github.com/WalkerBrum/pomodoro-react' alt='Pomodoro Time' target='_blank' rel='noreferrer'>Repositório</a>
                </h4>
                <iframe src='https://pomodoroconcentration.netlify.app/' title='Pomodoro Timer'></iframe>
                <h4>Sistema de Login/Cadastro: 
                    <a href='https://github.com/WalkerBrum/login-cadaster-react' alt='Sistema de Login/Cadastro' target='_blank' rel='noreferrer'>Repositório</a>
                </h4>
                <iframe src='https://walkerbrum.github.io/login-cadaster-react/' title='Sistema de Login/Cadastro'></iframe>
                <h4>Jogo da Memória Dragon Ball Z: 
                    <a href='https://github.com/WalkerBrum/memory-game' alt='Jogo da Memória Dragon Ball Z' target='_blank' rel='noreferrer'>Repositório</a>
                </h4>
                <iframe src='https://walkerbrum.github.io/memory-game/' title='Jogo da Memória Dragon Ball Z'></iframe>
                <h4>To Do List: 
                    <a href='https://github.com/WalkerBrum/to-do-list' alt='To Do List' target='_blank' rel='noreferrer'>Repositório</a>
                </h4>
                <iframe src='https://walkerbrum.github.io/to-do-list/' title='To Do List'></iframe>
            </div>
        </div>
    )
}