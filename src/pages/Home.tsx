import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext";

import '../styles/home.scss'

export function Home() {
    document.title = 'Entre ou crie uma sala'

    const {user, isAuthenticated } = useContext(AuthContext)
    //console.log("email",user?.user_email)
    const { 'letmeask.token': token } = parseCookies()

    useEffect(() => {
        if (!token) {
            window.location.href = '/'
        }
    }, [])

    useEffect(() => {
        if (!token) {
            window.location.href = '/';
        }
    }, [token, isAuthenticated]);


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
                    <input type="text" 
                    placeholder="Insira o código da sala"/>
                    <button id='enterRoom'> <span><MdOutlineLogin /></span> Entrar na sala</button>

                    <div>
                        <span></span><p>ou</p><span></span>
                    </div>

                    <h3>Crie sua própria sala</h3>
                    <button id='createRoom'>Criar sala</button>

                    <p><a href="/user">Clique para voltar</a></p>

                    
                    <p>email = { user?.user_email}</p>
                    <p>id = {user?.user_id }</p>
                     
                </div>
            </main>
        </div>
    )
}