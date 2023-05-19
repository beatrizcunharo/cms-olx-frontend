import { BotaoCms } from '../components/atom/BotaoCms'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import '../styles/paginas.scss'

export const PaginasCms = () => {
    return (
        <section className='mainSectionPages'>
            <div className="container cmsPages">
                <span className='title'>Páginas</span>
                <div className='boxPages'>
                    <div className='firstDiv'>
                        <div className='inputDiv'>
                            <input placeholder='Buscar' className='inputDiv-input' />
                            <button className='inputDiv-buttonIcon'><MagnifyingGlassIcon width={15} height={15} className='icon' /></button>
                        </div>
                        <BotaoCms texto='Criar Novo' cor='roxo' style='buttonNewPage' onClick={() => console.log("cliquei")}>Criar Novo</BotaoCms>
                    </div>
                </div>
            </div>
        </section>
    )
}