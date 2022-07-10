import { useState } from 'react';
import api from '../services/api';
import '../styles/login.scss';

export function Login() {
    document.title = 'Login'

    const [user_email, setUserEmail] = useState('')
    const [user_password, setUserPassword] = useState('')

    async function handleLogin(e:any) {
        e.preventDefault();

        const data = { user_password, user_email }
            console.log(data)

        const response = await api.post('/auth', data)

        if(response.data.token) {
            setUserPassword('');
            setUserEmail('');
            window.location.href = '/enter'
        }
        else { 
            console.log("deu ruim",response.data.failed)
        }
    }

    return (
        <div id='page-login'> 
            <aside>
                <div>
                    <h1>Bem-vindo!</h1>
                    <p>Para prosseguir na aplicação, entre na sua conta ou cadastre-se agora mesmo.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} action=''>
                        <label htmlFor="user_email">Email</label>
                        <input 
                            type="text" 
                            name='user_email' 
                            placeholder='Insira seu email' 
                            value={user_email}
                            onChange={(e) =>setUserEmail(e.target.value)}
                        />
                        
                        <label htmlFor="user_password">Senha</label>
                        <input 
                            type="password" 
                            name='user_password' 
                            placeholder='Insira sua senha' 
                            value={user_password}
                            onChange={(e) =>setUserPassword(e.target.value)}
                        />
                        
                        <button type="submit">Entrar</button>
                    </form>
                    <p>Não possui uma conta? <a href="/register">Clique para fazer cadastro</a></p>
                </div>
            </main>
        </div>
    )
}