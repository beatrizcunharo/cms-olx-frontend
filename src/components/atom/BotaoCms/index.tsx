import './styles.scss'

interface BotaoCmsProps {
    cor?:  "roxo"
    texto: string
    style?: string
    onClick: (props: any) => any
}

export const BotaoCms = (props: BotaoCmsProps) => {
    const { cor, texto, style, onClick} = props

    return (
        <button className={`
            ${style ?? style}
            botaoCms ${cor && cor === 'roxo' ? 'cor_primaria' : ''}
        `}
        onClick={onClick}
        >
            {texto}
        </button>
    )
} 