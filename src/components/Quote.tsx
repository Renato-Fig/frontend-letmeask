import './quote.scss'

import { MdOutlineModeComment } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ReactNode } from 'react';

type QuestionProps = {
    question_id?: number,
    question_content: string;
	question_room_id: string;
	user_author_name: string;
    children?: ReactNode;
}


export function Quote({
    //question_id,
    question_content,
	question_room_id,
	user_author_name,
    children
}: QuestionProps) {
    return (
        <div 
            className='component-quote' 
        >
            <p>
                {question_content}
            </p>
            <footer>
                <span>{user_author_name}</span>
                <div>
                    <button>
                        <MdOutlineModeEditOutline />
                    </button>
                    <button>
                        <MdDeleteOutline />
                    </button>
                </div>
            </footer>
            <div className='component-answer'>
                {children}
               {/*  <div className='answer-posted'></div> */}
            </div>
        </div>
    )
}