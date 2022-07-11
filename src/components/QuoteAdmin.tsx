import './quote.scss'

import { MdOutlineModeComment } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';

export function QuoteAdmin() {
    const [show, setShow] = useState(false)

    return (
        <div className='component-quote'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laboriosam debitis tempora officiis facere maiores eos consequuntur neque dolore sunt ratione animi quod accusantium omnis reiciendis eius, voluptatibus necessitatibus. Consectetur?
            </p>
            <footer>
                <span>Renato Figueiredo</span>
                <div>
                    <button 
                    onClick={() => show==false?setShow((true)):setShow((false))}>
                        <MdOutlineModeComment />
                    </button>
                    <button><MdDeleteOutline /></button>
                </div>
            </footer>
            
            <div className='component-answer'>
                <div className='answer-posted'>Esta é a resposta</div>

                {
                    show?
                    <form action="">
                        <div>
                            <textarea 
                                className='admin-input'
                                placeholder='Qual sua resposta?'
                            >
                            </textarea>
                            <button>Enviar resposta</button>
                        </div>
                    </form>
                    :null
                }
                
            </div>
        </div>
    )
}