import { BotaoCms } from '../components/atom/BotaoCms'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import '../styles/paginas.scss'

export const PaginasCms = () => {
    return (
        <section className="cmsPages">
            <div className='container'>
                <span className='title'>Páginas</span>
                <div className='boxPages'>
                    <div className='firstDiv'>
                        <div className='inputDiv'>
                            <input placeholder='Buscar' className='inputDiv-input' />
                            <button className='inputDiv-buttonIcon'><MagnifyingGlassIcon width={15} height={15} className='icon' /></button>
                        </div>
                        <BotaoCms texto='Criar Novo' cor='roxo' style='buttonNewPage' onClick={() => console.log("teste")}>Criar Novo<ChevronDownIcon width={18} height={18} className='buttonNewPage-icon' /></BotaoCms>
                    </div>
                </div>
            </div>
        </section>
    )
}