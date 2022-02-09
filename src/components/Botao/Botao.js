import './Botao.scss';

export function Botao( {clicou, texto }) {
    return (
        <button onclick={clicou}>
            {texto}
        </button>
    )
}