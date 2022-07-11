import { parseCookies } from 'nookies';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';
import '../styles/login.scss';

type SignInData = {
  user_email: string;
  user_password: string;
}

export function Login() {
    document.title = 'Login'
    const { register, handleSubmit } = useForm<SignInData>();
    const { signIn } = useContext(AuthContext)
    const { 'letmeask.token': token } = parseCookies()

    async function handleLogin(data: SignInData) {
        await signIn(data);
    }

    useEffect(() => {
        if (token) {
            window.location.href = '/home'
        }
    }, [])

    useEffect(() => {
        if (token) {
            window.location.href = '/home'
        }
    }, [token])

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
                    <form onSubmit={handleSubmit(handleLogin)} action=''>
                        <label htmlFor="user_email">Email</label>
                        <input 
                            /* passando a função register e dentro o nome do input */
                            {...register('user_email')} 
                            type="text" 
                            name='user_email' 
                            placeholder='Insira seu email' 
                    /*         value={user_email}
                            onChange={(e) =>setUserEmail(e.target.value)}
                       */  />
                        
                        <label htmlFor="user_password">Senha</label>
                        <input 
                            /* passando a função register e dentro o nome do input */
                            {...register('user_password')} 
                            type="password" 
                            name='user_password' 
                            placeholder='Insira sua senha' 
                   /*          value={user_password}
                            onChange={(e) =>setUserPassword(e.target.value)}
                       */  />
                        
                        <button type="submit">Entrar</button>
                    </form>
                    <p>Não possui uma conta? <a href="/register">Clique para fazer cadastro</a></p>
                </div>
            </main>
        </div>
    )
}