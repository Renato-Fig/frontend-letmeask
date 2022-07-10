import { Quote } from '../components/Quote'
import { Modal } from '../components/Modal'

import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

export function AdminRoom() {
    document.title = 'Sala | Admin'

    return (
        <div id="page-room">
            <header>
                <a href="/home"><img src={logoImg} alt="" /></a>
                <ul>
                    <li><button>Sala #000000</button></li>
                    <li><button>Encerrar sala</button></li>
                </ul>
            </header>
            <main>
                <div className='room-title'>
                    <h1>Sala ReactJs</h1>
                    <span>4 perguntas</span>
                </div>
                <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Nenhuma pergunta por aqui...</h3>
                    <p>Envie o código desta sala para seus amigos <br/> e comece a responder perguntas!</p>
                </div>
            </main>
        </div>
    )
}