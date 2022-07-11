import { useEffect, useState } from "react";
import api from "../services/api";

type QuestionType = {
  question_id: 2;
	question_content: string;
	question_room_id: string;
	user_author_id: number;
}


export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('');

 

  useEffect(() => {
    async () => {
      const response = await api.get(`room/${roomId}`)
    }
    
  }, [])
}