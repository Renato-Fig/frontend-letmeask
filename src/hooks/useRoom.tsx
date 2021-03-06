import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";

type QuestionType = {
  question_id: 2;
	question_content: string;
	question_room_id: string;
	user_author_id: number;
}


export function useRoom(roomId: string) {
  const { user } = useContext(AuthContext)
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('');

 

  useEffect(() => {
    async () => {
      const response = await api.get(`room/${roomId}`)
      console.log("console useRoom",response)
      alert(response)

      setTitle(response.data.room_title)
      setQuestions(response.data.questions)

    }
    
  }, [roomId, user?.user_id])

  return { questions, title}
}