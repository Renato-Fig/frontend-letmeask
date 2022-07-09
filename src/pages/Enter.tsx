import '../styles/enter.scss'

export function Enter() {
    document.title = 'Crie ou entre em um sala'

    return (
        <div id='page-enter'> 
            <aside>
                <div>
                    <h1>Toda pergunta tem uma resposta</h1>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h3>Entre como participante</h3>
                    <input type="text" placeholder="Insira o código da sala"/>
                    <button id='enterRoom'>Entrar na sala</button>

                    <div>
                        <span></span><p>ou</p><span></span>
                    </div>

                    <h3>Crie sua própria sala</h3>
                    <button id='createRoom'>Criar sala</button>

                    <a href="/user">Voltar</a>
                </div>
            </main>
        </div>
    )
}