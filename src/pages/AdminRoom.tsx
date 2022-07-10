import { QuoteAdmin } from '../components/QuoteAdmin'
import { Modal } from '../components/Modal'

import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'

import { useState } from 'react';

import '../styles/room.scss'

export function AdminRoom() {
    document.title = 'Sala | Admin'

    const [showModal, setShowModal] = useState(false)

    return (
        

        <div id="page-room">
            {
                showModal?<Modal/>:null
            }
            
            <header>
                <a href="/home"><img src={logoImg} alt="" /></a>
                <ul>
                    <li><button>Sala #000000</button></li>
                    <li><button onClick={() => setShowModal((true))}>Encerrar sala</button></li>
                </ul>
            </header>
            <main>
                <div className='room-title'>
                    <h1>Sala ReactJs</h1>
                    <span>4 perguntas</span>
                </div>

                <ul className='question-list'>
                    <QuoteAdmin />
                    <QuoteAdmin />
                </ul>

                <ul className='userOnRoom-list'>

                </ul>

                <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Nenhuma pergunta por aqui...</h3>
                    <p>Envie o código desta sala para seus amigos <br/> e comece a responder perguntas!</p>
                </div>
            </main>
        </div>
    )
}