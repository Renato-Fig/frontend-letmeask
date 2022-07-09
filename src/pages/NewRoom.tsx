import '../styles/newroom.scss'

export function NewRoom() {
    return (
        <div id='page-new-room'> 
            <aside>
                <div>
                    <h1>Toda pergunta tem uma resposta</h1>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h3>Entre como participante</h3>
                    <input type="text" placeholder="Nome da sala"/>
                    <button id='enterRoom'>Entrar na sala</button>

                    <p>Quer entrar em uma sala já existente? <a href="/enter">Clique aqui</a></p>
                    
                </div>
            </main>
        </div>
    )
}