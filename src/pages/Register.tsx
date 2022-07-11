import { parseCookies } from 'nookies';
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api'
import '../styles/register.scss'


type SignUpData = {
    user_email: string;
    user_password: string;
    user_name: string;
}

export function Register() {
    document.title = 'Cadastro'

    const { register, handleSubmit } = useForm<SignUpData>();
    const { signUp } = useContext(AuthContext)
    const { 'letmeask.token': token } = parseCookies()

    const [user_email, setUserEmail] = useState('')
    const [user_name, setUserName] = useState('')
    const [user_password, setUserPassword] = useState('')

    async function handleRegister(data: SignUpData){  
        await signUp(data);
    }

    useEffect(() => {
        if (token) {
            window.location.href = '/home'
        }
    }, [])

    useEffect(() => {
        if (!token) {
            window.location.href = '/'
        }
    }, [token])

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
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <label htmlFor="user_name">Nome <span>*</span></label>
                        <input 
                            {...register('user_name')}
                            type="text" 
                            name='user_name' 
                            placeholder='Nome do Usuário'
                            /*value={user_name}
                            onChange={(e) => setUserName(data.target.value)}*/
                        />

                        <label htmlFor="user_email" >Email <span>*</span></label>
                        <input 
                            {...register('user_email')}
                            type="email" 
                            name='user_email'
                            placeholder='usuario@email.com' 
                            /*value={user_email}
                            onChange={(e) => setUserEmail(e.target.value)}*/
                        />

                        <label htmlFor="user_password">Senha <span>*</span></label>
                        <input 
                            type="password" 
                            {...register('user_password')}
                            name='user_password' 
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' 
                            /*value={user_password}
                            onChange={(e) => setUserPassword(e.target.value)}*/
                        />

                        <button>Entrar</button>
                    </form>
                    <p><a href="/">Já possui uma conta?</a></p>
                </div>
            </main>
        </div>
    )
}