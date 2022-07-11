import { Quote } from '../components/Quote'
import { Modal } from '../components/Modal'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import emptyRoomImg from '../assets/images/empty-questions.svg'
import logoImg from '../assets/images/logo.svg'
import { useParams } from 'react-router-dom'
import '../styles/room.scss'
import api from '../services/api'
import { RoomCode } from '../components/RoomCode'

type RoomParams = {
  id: string;
}

type QuestionType = {
  question_id: number;
    question_content: string;
	question_room_id: string;
	user_author_id: number;
	user_author_name: string;
    created_at: number;
    user_author: {
        user_email: string;
        user_id: number;
        user_name: string
        user_password?: string;
    }
}

export function Room() {
    document.title = 'Sala'
    const { user } = useContext(AuthContext);
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;
    
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');


    async function search() {
        const response = await api.get(`room/${roomId}`)
        console.log("console useRoom",response.data.room.room_title)

        const {room_id, room_title, room_created_at, user_admin_id, questions } = response.data.room

        /* questions: question_id, question_content, question_room_id, user_author_id:  */
        console.log("room",response.data.room)
        setTitle(room_title)
        setQuestions(questions)
        setDate(room_created_at)

        }

        useEffect(() => {
            search()
            
        }, [roomId, user?.user_id])

    async function handleSendQuestion(e: FormEvent) {
        e.preventDefault()

        if (newQuestion.trim() === '') {
            return;
        }

        const response = await api.post(`/question/${roomId}`, {
            question_content: newQuestion
        })

        setNewQuestion('')    
    }

    return (
        <div id="page-room">
            <header>
                <a href="/enter"><img src={logoImg} alt="" /></a>
                <ul>
                    <li>
                        <RoomCode code={roomId} />
                    </li>
                    {/* <li>
                        <button>
                            Sair da sala
                        </button>
                    </li> */}
                </ul>
            </header>
            <main>
                <div className='room-title'>                
                    <h1>{title}</h1>
                    <span>Criado em: {date}</span>
                </div>
                <form onSubmit={handleSendQuestion} className='input-user'>
                    <textarea 
                        placeholder='O que você quer perguntar?' 
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <button type="submit">Enviar pergunta</button>
                </form>

                <ul className='question-list'>
                    {/* <Quote /> */}
                    {questions.map((question) => {
                        return (
                            <Quote 
                                question_content={question.question_content}
                                question_room_id={question.question_room_id}
                                user_author_name={question.user_author.user_name}
                                question_id={question.question_id}
                                key={question.question_id}
                            />
                        )
                    })
                       
                    }

                </ul>
                {/* <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Nenhuma pergunta por aqui...</h3>
                    <p>Seja a primeira pessoa a fazer uma pergunta!</p>
                </div> */}
            </main>
        </div>
    )
}