import './quote.scss'

export function Quote() {
    const showAnswerInput = () => {
        return (
            <form action="" className='answer-input'>
                    <input type="text"/>
                    <button>Enviar resposta</button>
                </form>
        )
    }

    return (
        <div className='component-quote'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laboriosam debitis tempora officiis facere maiores eos consequuntur neque dolore sunt ratione animi quod accusantium omnis reiciendis eius, voluptatibus necessitatibus. Consectetur?</p>
            <footer>
                <span>Renato Figueiredo</span>
            </footer>
            <div className='component-answer'>
                <div className='answer-posted'>Esta é a resposta</div>
                <button>Fazer comentário</button>
                
            </div>
        </div>
    )
}