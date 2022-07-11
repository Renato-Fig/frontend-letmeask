import { parseCookies } from "nookies";
import { FormEvent, useContext, useEffect, useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";

import '../styles/home.scss'

export function Home() {
    document.title = 'Entre ou crie uma sala'
    
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('')

<<<<<<< HEAD
    const {user, isAuthenticated } = useContext(AuthContext)
    const { 'letmeask.token': token } = parseCookies()

=======
    const { user, isAuthenticated } = useContext(AuthContext)
    const { 'letmeask.token': token } = parseCookies()


    useEffect(() => {
        if (!token) {
            window.location.href = '/'
        }
    }, [])

    useEffect(() => {
        if (!token) {
            window.location.href = '/';
        }
    }, [token, isAuthenticated]);

    async function handleCreateRoom() {
        if(!user) {
            navigate('../')
        }

        navigate('../new-room')
    }

    async function handleEnterRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return
        }

        const response = await api.post('/rooms', {
            access_code: roomCode
        })
        console.log(response)

        if(response.data.failed === "Oops, room does not exist.") {
            alert(response.data.failed)
            return 
        }
        if(response.data.failed === "Ops, user is the room creator!") {
            alert(response.data.failed)
            return 
        }
        if (response.data.failed === "User already belongs to room!") {
            navigate(`../room/${roomCode}`)
            return 
        }
        if(response.data.message) {
            navigate(`../room/${roomCode}`)
            return 
        }
    }


>>>>>>> 7ef26e71a754b7b4cf7d47f8e394ad1fb5b07f06
    return (
        <div id='page-enter'> 
            <aside>
                <div>
                    <h1>Toda pergunta tem uma resposta</h1>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h3>Entre como participante</h3>
                    <form onSubmit={handleEnterRoom}>

                        <input 
                            type="text" 
                            placeholder="Insira o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />

                        <button type="submit" id='enterRoom'> 
                            <span><MdOutlineLogin /></span> 
                            Entrar na sala
                        </button>
                    </form>

                    <div>
                        <span></span><p>ou</p><span></span>
                    </div>

                    <h3>Crie sua própria sala</h3>
                    <button onClick={handleCreateRoom} id='createRoom'>Criar sala</button>

<<<<<<< HEAD
                    <p><a href="/user">Clique para ir para página de usuário</a></p>
=======
                    <p><a href="/user">Clique para voltar</a></p>
>>>>>>> 7ef26e71a754b7b4cf7d47f8e394ad1fb5b07f06
                     
                </div>
            </main>
        </div>
    )
}