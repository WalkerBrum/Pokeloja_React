import './Botao.scss';

export function Botao( {texto, ...props }) {
    return (
        <button {...props}>
            {texto}
        </button>
    )
}