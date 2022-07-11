import { ListRoom } from '../components/ListRoom'

import '../styles/room.scss'

import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { parseCookies } from 'nookies'

export function User() {
    document.title = 'Página do usuário'

    const {user, isAuthenticated } = useContext(AuthContext)
    const { 'letmeask.token': token } = parseCookies()


    return (
        <div id="page-room">
            <header>
                <img src={logoImg} alt="" />
                <ul>
                    <li><button>Entrar em uma sala</button></li>
                    <li><button>Editar perfil</button></li>
                    <li><button onClick={() => setUser('')}>Sair</button></li>
                </ul>
            </header>
            <main>
                <h5>Olá, { user?.user_name}</h5>
                <div className='list-rooms'>
                    <h2>Minhas salas</h2>
                    <ListRoom />
                </div>

                <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Você não participa de nenhuma sala</h3>
                    <p><a href="/home">Clique aqui</a> para entrar ou criar uma sala</p>
                </div>
            </main>
        </div>
    )
}

function setUser(arg0: string): void {
    throw new Error('Function not implemented.')
}
