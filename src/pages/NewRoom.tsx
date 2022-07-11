import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../services/api';
import '../styles/newroom.scss'

export function NewRoom() {
    const navigate = useNavigate()
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const response = await api.post('/rooms/new', {
            room_title:newRoom
        })

        if (response.data.createRoom) {
            navigate(`../room/admin/${response.data.createRoom.room_id}`)
        }
    }

    return (
        <div id='page-new-room'> 
            <aside>
                <div>
                    <h1>Toda pergunta tem uma resposta</h1>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h3>Crie sua sala</h3>
                    <form onSubmit={handleCreateRoom}>

                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)} 
                            value={newRoom}
                            />
                        <button type="submit" id='enterRoom'>Criar sala</button>

                    </form>
                    <p>Quer entrar em uma sala já existente? <a href="/enter">Clique aqui</a></p>
                    
                </div>
            </main>
        </div>
    )
}