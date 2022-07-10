import { ListRoom } from '../components/ListRoom'

import '../styles/room.scss'

import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'

export function User() {
    document.title = 'Página do usuário'

    return (
        <div id="page-room">
            <header>
                <a href="/enter"><img src={logoImg} alt="" /></a>
                <ul>
                    <li><button>Entrar em uma sala</button></li>
                    <li><button>Editar perfil</button></li>
                </ul>
            </header>
            <main>
                <h5>Olá, Renato Figueiredo!</h5>
                <div className='list-rooms'>
                    <h2>Minhas salas</h2>
                    <ListRoom />
                </div>

                <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Você não participa de nenhuma sala</h3>
                    <p><a href="/enter">Clique aqui</a> para entrar ou criar uma sala</p>
                </div>
            </main>
        </div>
    )
}