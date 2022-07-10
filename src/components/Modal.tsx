import { MdOutlineWarningAmber } from "react-icons/md";

import { useState } from 'react';


import './modal.scss'

export function Modal() {

    const [showModal, setShowModal] = useState(true)


    return (
        <div id="component-modal">
            <main>
                <span><MdOutlineWarningAmber /></span>
                <h4>Encerrar sala</h4>
                <p>Tem certeza que você deseja encerrar esta sala?</p>
                <button id='btn-cancel' onClick={() => setShowModal((false))}>Cancelar</button>
                <button id='btn-confirm-close'>Sim, encerrar</button>
            </main>
        </div>
    )
}