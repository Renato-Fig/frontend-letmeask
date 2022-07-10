import { useState } from 'react'
import api from '../services/api'
import '../styles/register.scss'

export function Register() {
    document.title = 'Cadastro'

    const [user_email, setUserEmail] = useState('')
    const [user_name, setUserName] = useState('')
    const [user_password, setUserPassword] = useState('')

    async function handleSignUp(e:any){
        e.preventDefault();

        const data = { user_name, user_email, user_password }

        const response = await api.post('/user', data)

        if (response.status === 201) {
            console.log(response.data)
        }
    }

    return (
        <div id="page-register">
            <aside>
                <div>
                    <h1>Faça seu cadastro</h1>
                    <p>Você precisa ter uma conta para entrar.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h2>Cadastre-se</h2>
                    <form onSubmit={handleSignUp}>
                        <label htmlFor="user_name">Nome <span>*</span></label>
                        <input 
                            type="text" 
                            name='user_name' 
                            placeholder='Nome do Usuário'
                            value={user_name}
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <label htmlFor="user_email" >Email <span>*</span></label>
                        <input 
                            type="email" 
                            name='user_email'
                            placeholder='usuario@email.com' 
                            value={user_email}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />

                        <label htmlFor="user_password">Senha <span>*</span></label>
                        <input 
                            type="password" 
                            name='user_password' 
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' 
                            value={user_password}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />

                        <button>Entrar</button>
                    </form>
                    <p><a href="/">Já possui uma conta?</a></p>
                </div>
            </main>
        </div>
    )
}