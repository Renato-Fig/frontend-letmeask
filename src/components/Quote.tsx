import './quote.scss'

export function Quote() {
    function showInput() {
        document.querySelector('.btn-show-input')
    }

    return (
        <div className='component-quote'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laboriosam debitis tempora officiis facere maiores eos consequuntur neque dolore sunt ratione animi quod accusantium omnis reiciendis eius, voluptatibus necessitatibus. Consectetur?</p>
            <footer>
                <span>Renato Figueiredo</span>
            </footer>
            <div className='component-answer'>Esta é a resposta</div>
                <button className='btn-'>Fazer comentário</button>
                <form action="" className='admin-answer'>
                    <textarea name="answer" ></textarea>
                    <button>Enviar resposta</button>
                </form>
        </div>
    )
}