import { QuoteAdmin } from '../components/QuoteAdmin'
import { Modal } from '../components/Modal'
import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent, useContext, useEffect, useState } from 'react';

import logoImg from '../assets/images/logo.svg'


import '../styles/room.scss'
import { useRoom } from '../hooks/useRoom';
import { RoomCode } from '../components/RoomCode';
import { AuthContext } from '../contexts/AuthContext';
import { Quote } from '../components/Quote';
import api from '../services/api';

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


export function AdminRoom() {
    document.title = 'Sala | Admin'

    const { user } = useContext(AuthContext);
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;
    
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');



    const [showModal, setShowModal] = useState(false)

    
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

    /* async function handleAnwerQuestion(e: FormEvent) {
        e.preventDefault()

        if (newQuestion.trim() === '') {
            return;
        }

        const response = await api.post(`/question/${roomId}`, {
            question_content: newQuestion
        })

        setNewQuestion('')    
    } */

    return (
        

        <div id="page-room">
      {/*       {
                showModal?<Modal/>:null
            } */}
            
            <header>
                <a href="/home"><img src={logoImg} alt="" /></a>
                <ul>
                    <li>
                        <RoomCode code={"roomId"} />
                    </li>
                   {/*  <li><button onClick={() => setShowModal((true))}>Encerrar sala</button></li> */}
                </ul>
            </header>
            <main>
                <div className='room-title'>
                    <h1>{ title }</h1>
                    <span>Criado em: {date}</span>
                </div>

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

                <ul className='userOnRoom-list'>

                </ul>

             {/*    <div className="empty-room">
                    <img src={emptyRoomImg} alt="" />
                    <h3>Nenhuma pergunta por aqui...</h3>
                    <p>Envie o código desta sala para seus amigos <br/> e comece a responder perguntas!</p>
                </div> */}
            </main>
        </div>
    )
}