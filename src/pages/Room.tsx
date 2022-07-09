import { Quote } from '../components/Quote'
import { Modal } from '../components/Modal'

import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'
 
export function Room() {
    document.title = 'Sala'

    return (
        <div id="page-room">
            <header>
                <a href="/enter"><img src={logoImg} alt="" /></a>
                <ul>
                    <li><button>Sala #000000</button></li>
                    <li><button>Sair da sala</button></li>
                </ul>
            </header>
            <main>
                <div className='room-title'>                
                    <h1>Sala ReactJs</h1>
                    <span>Criado por Renato, em 08/07/2022</span>    
                </div>
                <form action="">
                    <textarea placeholder='O que você quer perguntar?'></textarea>
                    <button>Enviar pergunta</button>
                </form>
                <ul className='question-list'>
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                </ul>
                <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Nenhuma pergunta por aqui...</h3>
                    <p>Seja a primeira pessoa a fazer uma pergunta!</p>
                </div>
            </main>
        </div>
    )
}