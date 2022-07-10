import { MdOutlineWarningAmber } from "react-icons/md";

import './modal.scss'

export function Modal() {
    

    return (
        <div id="component-modal">
            <main>
                <span><MdOutlineWarningAmber /></span>
                <h4>Encerrar sala</h4>
                <p>Tem certeza que você deseja encerrar esta sala?</p>
                <button id='btn-cancel'>Cancelar</button>
                <button id='btn-confirm-close'>Sim, encerrar</button>
            </main>
        </div>
    )
}