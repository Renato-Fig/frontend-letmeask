import './quote.scss'

import { MdOutlineModeComment } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

export function Quote() {
    return (
        <div className='component-quote'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laboriosam debitis tempora officiis facere maiores eos consequuntur neque dolore sunt ratione animi quod accusantium omnis reiciendis eius, voluptatibus necessitatibus. Consectetur?</p>
            <footer>
                <span>Renato Figueiredo</span>
                <div>
                    <button><MdOutlineModeEditOutline /></button>
                    <button><MdDeleteOutline /></button>
                </div>
            </footer>
            <div className='component-answer'>
                <div className='answer-posted'>Esta é a resposta</div>
            </div>
        </div>
    )
}