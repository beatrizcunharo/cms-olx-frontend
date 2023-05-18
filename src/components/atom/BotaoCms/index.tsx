import { ReactNode } from 'react'
import './styles.scss'

interface BotaoCmsProps {
    cor?:  "roxo"
    children: ReactNode
    texto: string
    style?: string
    onClick: (props: any) => any
}

export const BotaoCms = (props: BotaoCmsProps) => {
    const { cor, children, texto, style, onClick} = props

    return (
        <button className={`
            ${style ?? style}
            botaoCms ${cor && cor === 'roxo' ? 'cor_primaria' : ''}
        `}
        onClick={onClick}
        aria-label={texto}
        >
            {children}
        </button>
    )
} 