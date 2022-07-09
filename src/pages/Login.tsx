import '../styles/login.scss';

export function Login() {
    document.title = 'Login'

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
                    <form action=''>
                        <label htmlFor="user_email">Email</label>
                        <input type="text" name='user_email' placeholder='Insira seu email'/>
                        
                        <label htmlFor="user_password">Senha</label>
                        <input type="password" name='user_password' placeholder='Insira sua senha'/>
                        
                        <button>Entrar</button>
                    </form>
                    <p>Não possui uma conta? <a href="/register">Clique para fazer cadastro</a></p>
                </div>
            </main>
        </div>
    )
}